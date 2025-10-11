const items = [
    {
        "name": "Cleanser",
        "image": "images/cleanser.png",
        "alt": "Cleanser picture",
        "price": 30,
        "instock": true
    },
    {
        "name": "Sunscreen",
        "image": "images/sunscreen.png",
        "alt": "Sunscreen picture",
        "price": 30,
        "instock": true
    },
    {
        "name": "Toner",
        "image": "images/toner.png",
        "alt": "Toner picture",
        "price": 25,
        "instock": true
    },
    {
        "name": "Dry Brush",
        "image": "images/dry_brush.png",
        "alt": "Dry Brush picture",
        "price": 10,
        "instock": true
    },
    {
        "name": "Essence",
        "image": "images/essence.png",
        "alt": "Essence picture",
        "price": 40,
        "instock": true
    },
    {
        "name": "Exfoliant",
        "image": "images/exfoliant.png",
        "alt": "Exfoliant picture",
        "price": 40,
        "instock": true
    },
    {
        "name": "Retinol",
        "image": "images/retinol.png",
        "alt": "Retinol picture",
        "price": 30,
        "instock": true
    },
    {
        "name": "Scrub",
        "image": "images/scrub.png",
        "alt": "Scrub picture",
        "price": 30,
        "instock": true
    },
    {
        "name": "Moisturizer",
        "image": "images/moisturizer.png",
        "alt": "Moisturizer picture",
        "price": 30,
        "instock": true
    },
    {
        "name": "Mask",
        "image": "images/mask.png",
        "alt": "Mask picture",
        "price": 30,
        "instock": true
    },
    {
        "name": "Lip Balm",
        "image": "images/lip_balm.png",
        "alt": "Lip Balm picture",
        "price": 30,
        "instock": true
    },
    {
        "name": "Red Light Mask",
        "image": "images/led_mask.png",
        "alt": "Red Light Mask picture",
        "price": 30,
        "instock": true
    },
    {
        "name": "Face Roller",
        "image": "images/face_roller.png",
        "alt": "Face Roller picture",
        "price": 20,
        "instock": true
    },
    {
        "name": "Face Oil",
        "image": "images/face_oil.png",
        "alt": "Face Oil picture",
        "price": 20,
        "instock": true
    },
    {
        "name": "Pimple Patch",
        "image": "images/pimple_patch.png",
        "alt": "Pimple Patch picture",
        "price": 15,
        "instock": true
    },
    {
        "name": "Body Scrub",
        "image": "images/body_scrub.png",
        "alt": "Body Scrub picture",
        "price": 10,
        "instock": true
    },
    {
        "name": "Cleansing Balm",
        "image": "images/cleansing_balm.png",
        "alt": "Cleansing Balm picture",
        "price": 10,
        "instock": true
    },
    {
        "name": "Exfoliating Bar",
        "image": "images/exfoliating_bar.png",
        "alt": "Exfoliating Bar picture",
        "price": 10,
        "instock": true
    },
    {
        "name": "Emulsion",
        "image": "images/emulsion.png",
        "alt": "Emulsion picture",
        "price": 10,
        "instock": true
    }
]

function inject(item) {
    const container = document.querySelector(".container");
    //query the container
    //use adjacent html to push card into container
    const html = `<div class="card">
    <h2 class="card__heading">${item.name}</h2><img src="${item.image}"><div class="card__bottom">
                <h3> $${item.price} </h3>
                <button class="buy" data-title="${item.name}">BUY</button>
            </div>`
    container.insertAdjacentHTML('afterbegin', html);
}

inject(items[0])
items.forEach((item) => inject(item))
//create inject function and loop through items
function add_to_cart() {
    const buy_buttons = document.querySelectorAll('.buy'); //node lsit
    const cart = document.querySelector('.cart');
    const items_in_cart = []
    buy_buttons.forEach((btn) => btn.addEventListener('click', function(event) {
        for (let i = 0; i < items.length; i++) {
            if (items[i]['name'] === event.currentTarget.dataset.title) {
                items_in_cart.push(items[i])
                console.log(items[i]);
                console.log(items_in_cart);
                //its not a item in cart issue its something to do witht the html
            }
        }
        items_in_cart.forEach((item) => (cart.insertAdjacentHTML('afterend', `<div class='cart__product'>${item['name']}: ${item.price} </div> `)))
    })) 
}
add_to_cart()
function cart_total(items_in_cart) {
    let cart_total = 0
    items_in_cart.forEach((item) => (cart_total += item.price))
    return cart_total
}

function remove_from_cart() {

}


function filter() {
    //
}
