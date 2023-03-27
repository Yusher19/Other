window.onload =
  () => {
 
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
 
  const htmlProducts = products.map(jsonToHTML)
  document.querySelector("#products").innerHTML = htmlProducts
 
}
