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
const cart = document.querySelector('.cart');
const items_in_cart = [];
let cart_total = 0;

function add_to_cart() {
    const buy_buttons = document.querySelectorAll('.buy'); //node list
    buy_buttons.forEach((btn) => btn.addEventListener('click', function(event) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            if (item['name'] === event.currentTarget.dataset.title) {
                //its not a item in cart issue its something to do witht the html
                const existingProduct = cart.querySelector(`.cart__product[data-title="${item.name}"]`);
                if (existingProduct) {
                    item.amount++
                    const item_details = existingProduct.querySelector('.item__details')
                    item_details.textContent = `${item.name} (Amount: ${item.amount}): $${item.amount * item.price}`;
                } else {
                    item.amount = 1;
                    console.log(item.amount);
                    items_in_cart.push(items[i]);
                    const cart_heading = document.getElementById('cart__heading');
                    cart_heading.insertAdjacentHTML('beforeend', `
                    <div class='cart__product' data-title="${item.name}">
                    <span class='item__details'> ${item.name} (Amount: ${item.amount}): $${item.amount * item.price}</span>
                    <div class="remove--buttons"> 
                    <button class='remove--one'>Remove one</button>
                    <button class='remove--all'>Remove all</button>
                    </div>
                    </div>`
                    );
                }
                cart_total = 0
                find_cart_total();
                console.log(items_in_cart)
            }
        }
    })) 
}
add_to_cart() 
function find_cart_total() {
    items_in_cart.forEach(item => {cart_total += item.price * item.amount; });
    const total_section = cart.querySelector('.total');
    if (total_section) {
        total_details = document.querySelector('.total__details');
        total_details.textContent = `Total: ${cart_total}`
    } else {
        cart.insertAdjacentHTML('beforeend', `<div class='total'> 
            <span class='total__details'> 
                Total: ${cart_total} 
            </span>
            <button class="purchase">Purchase</button>
            </div>`)
    }
}

function remove_one_from_cart() {
    const btns = document.querySelectorAll('.remove--one');
    btns.forEach((btn) => {
        btn.addEventListener('click', function(event) {
            const item = event.currentTarget.parentElement.parentElement;
            const itemName = item.dataset.title;

            items_in_cart.forEach((product) => {
                if (product.name === itemName) {
                    product.amount -= 1;
                    console.log(items_in_cart);
                }
            });
        });
    });
}

function remove_all_from_cart() {
    const btns = document.querySelectorAll('.remove--all'); // select the correct buttons
    btns.forEach((btn) => {
        btn.addEventListener('click', function(event) {
            const item = event.currentTarget.parentElement.parentElement; // grandparent cart__product
            const itemName = item.dataset.title;

            const index = items_in_cart.findIndex(product => product.name === itemName); 
            if (index !== -1) {
                items_in_cart.splice(index, 1); // remove from array
                item.remove(); // remove from DOM
            }
        });
    });
}

remove_one_from_cart()
remove_all_from_cart()

function filter() {
    //
}

function sort() {

}