const product = [
     {
        title: "Chocolate Cake",
        frosting: "Chocolate",
        addOns: "Chocolate Syrup, Sprinkles",
        image: 'images/cake1.jpg',
        price: 250,
    },
    {
        title: "Cupcake",
        frosting: "Strawberry",
        addOns: "Vanilla Syrup, Strawberry",
        image: 'images/cake2.jpg',
        price: 300,
    },
    {
        title: "Ice Cream Cake",
        frosting: "Chocolate",
        addOns: "Chocolate Syrup",
        image: 'images/cake3.jpg',
        price: 350,
    },
    {
        title: "Fruit Cake",
        frosting: "Vanilla",
        addOns: "Fruits",
        image: 'images/cake4.jpg',
        price: 250,
        
    }
    {
        title: "Cake",
        frosting: "Vanilla",
        addOns: "Fruits, Blueberry",
        image: 'images/cake4.jpg',
        price: 250, 
    },
    {
        title: "Chocolate Cake",
        frosting: "Chocolate",
        addOns: "Blueberry, Strawberry",
        image: 'images/cake2.jpg',
        price: 300,
    },
    {
        title: "Donuts",
        frosting: "Chocolate",
        addOns: "Vanilla Syrup,Chocolate Syrup, Sprinkles",
        image: 'images/cake2.jpg',
        price: 300,
    },
    {
        title: "Cake",
        frosting: "Vanilla",
        addOns: "Chocolate Syrup, Strawberry",
        image: 'images/cake2.jpg',
        price: 300,
    },
    {
        title: "Cupcake",
        frosting: "Strawberry",
        addOns: "Vanilla Syrup, Strawberry",
        image: 'images/cake2.jpg',
        price: 300,
    },
    {
        title: "Cupcake",
        frosting: "Vanilla",
        addOns: "Chocolate, Marshmallow",
        image: 'images/cake2.jpg',
        price: 300,
    },
    {
        title: "Cupcake",
        frosting: "Strawberry",
        addOns: "Blueberry, Strawberry",
        image: 'images/cake2.jpg',
        price: 300,
    },
    {
        title: "Cake",
        frosting: "Vanilla",
        addOns: "Strawberry",
        image: 'images/cake2.jpg',
        price: 300,
    },

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>${price}.00 Pesos</h2>`+
        "<button onlick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function displaycart(a){
    let j = 0;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is Empty";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
    {
        var {image, title, price} = items;
        return(
            `<div class='cart-item'>
            <div class='row-img'>
                <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'> ${price}.00 Pesos</h2>`+
            "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('');
    }

}
