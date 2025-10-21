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
        "name": "Face Mask",
        "image": "images/face_mask.png",
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
    },
    {
        "name": "Eye Mask",
        "image": "images/eye_mask.png",
        "alt": "Eye Mask image",
        "price": 15,
        "type": ["face"],
        "instock": true
    },
    {
        "name": "Mist",
        "image": "images/mist.png",
        "alt": "Mist image",
        "price": 25,
        "type": ["face"],
        "instock": true
    },
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
                    <button class='remove--one'>Remove one</button><span class='line'></span>
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
        if (event.target.classList.contains('remove--one')) {
            //need to find js version
            item.amount -= 1;
            item_details = cart.querySelector('.item__details');
            item_details.textContent = `${item.name} (Amount: ${item.amount}): $${item.amount * item.price}`;
            cart_total -= item.price;
            update_cart_total()
            console.log(cart_total)
            if (item.amount === 0) {
            html_item.remove();
        }
        } else if (event.target.classList.contains('remove--all')) {
            cart_total -= item.price * item.amount
            update_cart_total();
            console.log(cart_total)
            item.amount = 0;    
            if (item.amount === 0) {
            html_item.remove();
        }
        }
        
    }) 
}

remove_items()

function filter() {
    const check_boxes = document.getElementsByName('filter_type');
    filter_type = '';
    let filter_types = [];
    check_boxes.forEach(btn => btn.addEventListener('click', function(event) {
        //enable filters
        let filter_type = event.target.value.toLowerCase();
        //this is an ANY filter
        if (filter_type === 'tools') {
            filter_type = 'tool';
            //the filter button is Tools while in the items array the type is tool
        }
        filter_types.push(filter_type);
        if (btn.checked) {

        }
        console.log(filter_type)
        //disable filters
        //for filter in filter types
        //filtered_array = items.filter(item => item.type.includes(filter_types[filter]))
        const filtered_array = items.filter(item => item.type.includes(filter_types[i]));
        
        filter_types.forEach(item )
        console.log(filtered_array);
        
        //inject filtered cards
        const container = document.querySelector('.container');
        container.innerHTML = ''
        filtered_array.forEach(item =>inject(item))
    }))
}
filter();
//TO DO: move this elsewhere
// the container.innerhtml = '' breaks the buy button event listeners bc it deletes the buy buttons
// but this checks the container and that doesnt get deleted so it works
container.addEventListener('click', function(event) {
    if (event.target.classList.contains('buy')) {
        const itemName = event.target.dataset.title;
        const item = items.find(i => i.name === itemName);
        handle_add_to_cart(item); // this just adds item, no listeners
        const receipt = document.querySelector('.receipt');
        if (reciept) {
            receipt.innerHTML = ''
        }
    }
});


function sort() {
    //price sorting 
    const sort_btns = document.getElementsByName('sort_type');
    sort_btns.forEach(btn => btn.addEventListener('click', function(event) {
        const sort_type = event.target.value;
        console.log('button triggered')
        if (sort_type === 'Expensive to Cheap') {
            sorted_array = items.sort((a, b)=> a.price - b.price )
            console.log(sorted_array)
        } else if (sort_type === 'Cheap to Expensive') {
            sorted_array = items.sort((a, b)=> b.price - a.price )
            console.log(sorted_array)
        }   
        container.innerHTML = ''
        sorted_array.forEach((item) => inject(item))
    }))
}
sort()

function get_items_bought() {
    //for putting the items on the receipt
    wrapped_array = [];
    items_in_cart.forEach(item => wrapped_array.push(`<ul>${item.name} (Amount: ${item.amount})</ul>`));
    return wrapped_array;
    //for item in items in cart, wrap it in a ul and add it to the html in reciept
}
//makes reciept
function reciept() {
    //normally i would do purchase.addeventlistener 
    // but i was having errors that it was null so i went with this
    cart.addEventListener('click', function(event) {
        if (event.target.classList.contains('purchase')) { 
            console.log('purcahse');
            console.log(items_in_cart);
            items_bought = get_items_bought();
            console.log(items_bought)
            let html = `<div class='receipt'>
            <h3>Receipt</h3>
            <p>Total: $${cart_total}</p>
            <h4>Items Bought:</h4>`; ///it not having a end div is so i can push each item 
            // to the html otherwise it would have end div then the items which wont work
            items_bought.forEach(item => html += item);
            html += '</div>'; //close the receipt div properly
            cart.insertAdjacentHTML('afterend', html);
        }
    }
)
}
get_items_bought()
reciept()
