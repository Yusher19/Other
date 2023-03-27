const product = [
    {
        id: 0,
        image: 'images/cake1.jpg',
        title: 'Chocolate Cake',
        price: 250,
    },
    {
        id: 1,
        image: 'images/cake2.jpg',
        title: 'Fruit Cake',
        price: 300,
    },
    {
        id: 2,
        image: 'images/cake3.jpg',
        title: 'Blueberry Cupcakes',
        price: 350,
    },
    {
        id: 3,
        image: 'images/cake4.jpg',
        title: 'Brown Cake',
        price: 250,
    }

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