const items = [
    {
        "name": "Cleanser",
        "image": "images/cleanser.png",
        "alt": "Cleanser picture",
        "price": 30,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Sunscreen",
        "image": "images/sunscreen.png",
        "alt": "Sunscreen picture",
        "price": 30,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Toner",
        "image": "images/toner.png",
        "alt": "Toner picture",
        "price": 25,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Dry Brush",
        "image": "images/dry_brush.png",
        "alt": "Dry Brush picture",
        "price": 10,
        "type": ["tool", "body"],
        "instock": true
    },
    {
        "name": "Essence",
        "image": "images/essence.png",
        "alt": "Essence picture",
        "price": 40,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Exfoliant",
        "image": "images/exfoliant.png",
        "alt": "Exfoliant picture",
        "price": 40,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Retinol",
        "image": "images/retinol.png",
        "alt": "Retinol picture",
        "price": 30,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Moisturizer",
        "image": "images/moisturizer.png",
        "alt": "Moisturizer picture",
        "price": 30,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Mask",
        "image": "images/mask.png",
        "alt": "Mask picture",
        "price": 30,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Lip Balm",
        "image": "images/lip_balm.png",
        "alt": "Lip Balm picture",
        "price": 30,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Red Light Mask",
        "image": "images/led_mask.png",
        "alt": "Red Light Mask picture",
        "price": 30,
        "type": ["face", "tool"],
        "instock": true
    },
    {
        "name": "Face Roller",
        "image": "images/face_roller.png",
        "alt": "Face Roller picture",
        "price": 20,
        "type": ["face", "tool"],
        "instock": true
    },
    {
        "name": "Face Oil",
        "image": "images/face_oil.png",
        "alt": "Face Oil picture",
        "price": 20,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Pimple Patch",
        "image": "images/pimple_patch.png",
        "alt": "Pimple Patch picture",
        "price": 15,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Body Scrub",
        "image": "images/body_scrub.png",
        "alt": "Body Scrub picture",
        "price": 10,
        "type": ["body"],
        "instock": true
    },
    {
        "name": "Cleansing Balm",
        "image": "images/cleansing_balm.png",
        "alt": "Cleansing Balm picture",
        "price": 10,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Exfoliating Bar",
        "image": "images/exfoliating_bar.png",
        "alt": "Exfoliating Bar picture",
        "price": 10,
        "type": ["body"],
        "instock": true
    },
    {
        "name": "Emulsion",
        "image": "images/emulsion.png",
        "alt": "Emulsion picture",
        "price": 10,
        "type": ["face"],
        "instock": true
    }
]

const cart = document.querySelector('.cart');
const items_in_cart = [];
let cart_total = 0;
const container = document.querySelector(".container");

function inject(item) {
    //query the container
    //use adjacent html to push card into container
    const html = `<div class="card">
    <h2 class="card__heading">${item.name}</h2><img src="${item.image}"><div class="card__bottom">
                <h3> $${item.price} </h3>
                <button class="buy" data-title="${item.name}">BUY</button>
            </div>`
    container.insertAdjacentHTML('afterbegin', html);
}

items.forEach((item) => inject(item))
//create inject function and loop through items


function render_cart_items(item) {
   const cart_heading = document.querySelector('.cart__items')
                    cart_heading.insertAdjacentHTML('beforeend', `
                    <div class='cart__product' data-title="${item.name}">
                    <span class='item__details'> ${item.name} (Amount: ${item.amount}): $${item.amount * item.price}</span>
                    <div class="remove--buttons"> 
                    <button class='remove--one'>Remove one</button>
                    <button class='remove--all'>Remove all</button>
                    </div>
                    </div>`)
}

function handle_add_to_cart(item) {
    const existingProduct = cart.querySelector(`.cart__product[data-title="${item.name}"]`);
    //no event listeners here because it gets messed up if the listeners are here and the user filters
    if (existingProduct) {
        item.amount++;
        cart_total += item.price;
        const item_details = existingProduct.querySelector('.item__details');
        item_details.textContent = `${item.name} (Amount: ${item.amount}): $${item.amount * item.price}`;
    } else {
        item.amount = 1;
        cart_total += item.price;
        items_in_cart.push(item);
        render_cart_items(item);
    }

    update_cart_total();
}



function update_cart_total() {
    const total_section = cart.querySelector('.total');
    if (total_section) {
        total_details = document.querySelector('.total__details');
        total_details.textContent = `Total: $${cart_total}`
    } else {
        cart.insertAdjacentHTML('beforeend', `<div class='total'> 
            <span class='total__details'> 
                Total: $${cart_total} 
            </span>
            <button class="purchase">Purchase</button>
            </div>`)
    }
}

function remove_items() {
    cart.addEventListener('click', function(event) {
        //gets html element and its name
        const html_item = event.target.parentElement.parentElement;
        const item_name = html_item.dataset.title;
        const item = items_in_cart.find(item => item.name === item_name);
        console.log(item)
        if (event.target.classList.contains('remove--one')) {
            //need to find js version
            item.amount -= 1;
            item_details = cart.querySelector('.item__details');
            item_details.textContent = `${item.name} (Amount: ${item.amount}): $${item.amount * item.price}`;
            cart_total -= item.price;
            update_cart_total()
            console.log(cart_total)
        } else if (event.target.classList.contains('remove--all')) {
            cart_total -= item.price * item.amount
            update_cart_total();
            console.log(cart_total)
            item.amount = 0;    
        }
        if (item.amount === 0) {
            html_item.remove();
        }
    }) 
}

function remove_one_from_cart() {
    console.log('jhsdfjsdfjillj');
    const btns = document.querySelectorAll('.remove--one');
    btns.forEach((btn) => {
        btn.addEventListener('click', function(event) {
            console.log('fifjisjif');   
            
        });
    });
}

function remove_all_from_cart() {
    const btns = document.querySelectorAll('.remove--all'); // select the correct buttons
    btns.forEach((btn) => {
        btn.addEventListener('click', function(event) {
            
        });
    });
}

remove_items()

function filter() {
    const filter_btns = document.querySelectorAll('.filter');
    filter_btns.forEach(btn => btn.addEventListener('click', function(event) {
        let filter_type = event.target.textContent.toLowerCase();
        if (filter_type === 'tools') {
            filter_type = 'tool';
            //the filter button is Tools while in the items array the type is tool
        }
        console.log(filter_type)
        const filtered_array = items.filter(item => item.type.includes(filter_type));
        console.log(filtered_array);
        const container = document.querySelector('.container');
        container.innerHTML = ''
        //this unfortunately breaks the buy button event listenerd
        filtered_array.forEach(item =>inject(item))
        
        
    }))
    
}
filter();
container.addEventListener('click', function(event) {
    if (event.target.classList.contains('buy')) {
        const itemName = event.target.dataset.title;
        const item = items.find(i => i.name === itemName);
        handle_add_to_cart(item); // this just adds item, no listeners
    }
});
function sort() {
    //price sorting 
    const sort_btns = document.querySelectorAll('.sort');
    sort_btns.forEach(btn => btn.addEventListener('click', function(event) {
        const sort_type = event.target.textContent;
        console.log('button triggered')
        if (sort_type === 'Expensive to Cheap') {
            sorted_array = items.sort((itemA, itemB)=> itemB.price - itemA.price )
            console.log(sorted_array)
        } else if (sort_type === 'Cheap to Expensive') {
            sorted_array = items.sort((itemA, itemB)=> itemA.price - itemB.price )
            console.log(sorted_array)
        }   
        container.innerHTML = ''
        sorted_array.forEach((item) => inject(item))
    }))
}

sort() 
