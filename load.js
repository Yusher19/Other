const filterProducts =
        (products, searchTerm) => {
                const regex = new RegExp(searchTerm,"i")
                const displayedProducts = products.filter( x => x.description.replace(" ","").match(regex))
                document.querySelector("#products").innerHTML = displayedProducts.map(jsonToHTML).join('')
                return displayedProducts
  }
 
const displayFilteredProducts = 
  (event) => {
    const searchTerm = document.querySelector("#filterForm input").value;
    filterProducts(products, searchTerm)
    event.preventDefault()
  }
 
const filterForm = document.querySelector("#filterForm")
filterForm.addEventListener( "submit", displayFilteredProducts )
 
const jsonToHTML =
  (json) => `
  <div itemscope itemtype="https://schema.org/Product" class="card">
    <img itemprop="image" src=${json.image} alt="Avatar" style="width:100%"/>
    <div class="container">
      <h4 itemprop="description"><b>${json.description}</b></h4>
      <p>
      <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <span itemprop="price">${json.price} Pesos</span>
      </span>
      <p>
    </div>
  </div>
  `
 
window.onload =
  () => document.querySelector("#products").innerHTML = products.map(jsonToHTML).join('')