const CART = [
    {
        title: 'Bread',
        qty: 3,
        price: 12.30,
        isBuy: false
    },
    {
        title: 'Milk',
        qty: 20,
        price: 32.20,
        isBuy: true
    },
    {
        title: 'Beer',
        qty: 10,
        price: 34.50,
        isBuy: true
    },
    {
        title: 'Potato',
        qty: 4,
        price: 8,
        isBuy: false
    },
];

const discount = {
    WINTER20: {
        value: 20,
        type: 'persent'
    },
    WINTER30: {
        value: 30,
        type: 'persent'
    }, 
    WINTER40: {
        value: 40,
        type: 'persent'
    },
    NEWYEAR200: {
        value: 200,
        type: 'fixed'
    },
}


function addToCard() {
    const title = document.getElementById("prodTitle").value.trim()
    const qty = parseInt(document.getElementById("prodQty").value)
    const price = parseFloat(document.getElementById("prodPrice").value)
    let isValid = true

    let errors = [];
    if (title === '') {
        errors.push('Enter product title.')
    }
    if (isNaN(qty) || qty <= 0) {
        errors.push('Enter correct quantity value')
    }
    if (isNaN(price) || price <= 0) {
        errors.push('Enter correct price value')
    }
    if (errors.length === 0) {
        const findIndex = CART.findIndex((el) => el.title === title)
        if (findIndex !== -1) {
            const newQty = CART[findIndex].qty + qty;
            CART[findIndex].qty = newQty
            CART[findIndex].isBuy = false
        } else {
            CART.push({
                title,
                qty,
                price,
                isBuy: false
            }); 
        }

        viewProducts();
        toast.success('Product successfully added')
        document.getElementById("prodTitle").value = '';
        document.getElementById("prodQty").value = '1'
        document.getElementById("prodPrice").value = ''
    } else {
        toast.danger(errors.join(' '))
    }
}

function viewProducts() {
    let list = ''
    let index = 0
    
    CART.filter(el => !el.isBuy).forEach((prod) => {
        list += productItem(prod, index)
        index++
    })
    CART.filter(el => el.isBuy).forEach((prod) => {
        list += productItem(prod, index)
        index++
    })
   
    document.getElementById("productTbody").innerHTML = list;
    viewTotal() 
}

function productItem(prod,  index) {
    let list = `
    <tr>
        <td>${index + 1}</td>
        <td>${prod.title}</td>
        <td>${prod.isBuy ? '<span class="badge rounded-pill text-bg-success">YES</span>' : '<span class="badge rounded-pill text-bg-danger">NO</span>'}</td>
        <td>${prod.qty}</td>
        <td>${prod.price.toFixed(2)}</td>
        <td>${(prod.qty * prod.price).toFixed(2)}</td>
        <td>`;
            if (!prod.isBuy) {
                list+=`<button type="button" class="btn btn-info btn-sm" onclick="buyProduct('${prod.title}')">BUY</button>
                <button type="button" class="btn btn-danger btn-sm" onclick="removeProduct('${prod.title}')">REMOVE</button>`
            }
            list+=`
        </td>     
    </tr>`
    return list
}

function buyProduct(title) {
    CART[CART.findIndex(el => el.title === title)].isBuy = true
    viewProducts()   
}

function removeProduct(title) {
    CART.splice(CART.findIndex(el => el.title === title), 1)
    viewProducts()    
}

function calcTotal() {
    const total = {
        buy: 0,
        notBuy: 0,
        all: 0,
    }
    CART.forEach(prod => {
        const cost =  prod.qty * prod.price
        if (prod.isBuy) {
            total.buy +=cost
        } else {
            total.notBuy +=cost
        }
    })
    total.all = total.buy + total.notBuy
    return total
} 

function viewTotal(){
    const total = calcTotal()
    document.getElementById("cartTotal").innerText = total.all.toFixed(2)
    document.getElementById("cartTotalBnB").innerHTML = ` <big>${total.buy.toFixed(2)} |</big> <small>${total.notBuy.toFixed(2)}</small>`
    document.getElementById("showSum").innerText = total.buy.toFixed(2)

    if (document.getElementById('discount').value.trim() !== '') {
        calcDiscount()
    }
    
}

function calcDiscount(){
    const code = document.getElementById('discount').value.trim()
    const total = calcTotal()
    let discountValue = ''
    let finalSum = total.buy
    if(code !==''){
       if(discount[code]){
        if(discount[code].type==='persent'){
            finalSum = total.buy - (total.buy * discount[code].value / 100)
            discountValue = `${discount[code].value}%` 
            
        } else if(discount[code].type==='fixed'){
            finalSum = total.buy - discount[code].value
            discountValue = `${discount[code].value}₴`  
        }
            document.getElementById('valueDiscount').innerHTML = discountValue
            document.getElementById('finalSum').innerHTML = finalSum.toFixed(2)
       }else {
        toast.danger('There is no such code!')
       }
    }else{
        toast.warning('Enter discount code!')
    }   
}


viewProducts()

