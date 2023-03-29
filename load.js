const filterProducts =
        (products, searchTerm) => {
          console.log("filterProducts called with searchTerm: " +  searchTerm + " and array length: " + products.length)
          console.log(products)
          const fuse = new Fuse(products, { keys: Object.keys(products[0]), threshold: 0.1})
          const displayedProducts = fuse.search(searchTerm)
          console.log("filtered to this number of items: " + displayedProducts.length)
          document.querySelector("#products").innerHTML = displayedProducts.map(x=>x.item).map(jsonToHTML).join('')
  }
 
const displayFilteredProducts = 
  (event) => {
    const searchTerm = document.querySelector("#filterForm input").value;
    filterProducts(products, searchTerm)
    event.preventDefault()
  }
 
const filterForm = document.querySelector("#filterForm")
filterForm.addEventListener( "submit", displayFilteredProducts )
 
const generateJsonDigest =
  (json) => nacl.util.encodeBase64(nacl.hash(nacl.util.decodeUTF8(canonicalize(json))))
 
const jsonToHTML =
  (json) => `
  <div itemscope itemtype="https://schema.org/Product" class="card">
    <img itemprop="image" src=${json.image} alt="Avatar" style="width:100%"/>
 
    <div class="container">
      <h4 itemprop="description"><b>${json.description}</b></h4>
 
      <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <span id="pr" itemprop="price" content="${json.price}">${json.price} Pesos</span>
      </span>
      
        <input name="filter" type="text" placeholder="Type customization here">
        <button id="button-${generateJsonDigest(json)}" type="submit">Customize</button>
        <button id="btn2" type="submit">Add to cart</button>
    </div>
  </div>
  `
 
window.onload =
  () => document.querySelector("#products").innerHTML = products.map(jsonToHTML).join('')

  const fetchImage =
  async (prompt) => {
    var response = await fetch("./api/image/generate?prompt=" + prompt)
    if ( response.ok ) {
      console.log("successly generated image")
      const url = (await response.json())[0]
      console.log(url)
      return url
    } 
    else {
      return "failed"
    }
  }
 
const generateCustomImage = 
  async (event) => {
    if(event.target.nodeName === "BUTTON") {
      const productElement = event.target.closest("[itemtype='https://schema.org/Product']")
      const originalDescription = productElement.querySelector("[itemprop='description']").textContent
      const prompt = (originalDescription + ", " + productElement.querySelector("input").value).replace(/, ,/,",")
      const price = productElement.querySelector("[itemprop='price']").getAttribute("content")
      const url = await fetchImage(prompt)
      products.push(
        { description: prompt
        , price: price
        , image: url
        })
      filterProducts(products, originalDescription)
    }
  }
 
const productSection = document.querySelector("#products")
productSection.addEventListener("click",generateCustomImage)
