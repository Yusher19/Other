let cart = document.querySelector('.btn2');

for (let i=0; i < cart; i++) {
    cart[i].addEventsListener('click', () => {
        console.log("Added to cart")
    })
}