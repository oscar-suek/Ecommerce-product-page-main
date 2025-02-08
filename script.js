const minus = document.querySelector('#xd1')
const plus = document.querySelector('#xd2')
const quantityValue = document.querySelector('#p5')
const cartNum = document.querySelector('#num1')
const button = document.querySelector('#b1')
const totalPrice = document.querySelector('#totprice')
const itemQuantity = document.querySelector('#itemquantity')
const lostdiv = document.querySelector('#lostdiv')
const delimg = document.querySelector('#delimg')
const maincart = document.querySelector('#maincart')
const span1 = document.querySelector('#span1')
const d3 = document.querySelector('#d3')
const bigImg = document.querySelector('.img1')
const imgs = document.querySelectorAll('.img2')
const ig1 = document.querySelector('#ig1')
const pic1 = document.querySelector('#pic1')
const himg = document.querySelectorAll('.himg2')
const hugeimg = document.querySelector('#hugeimg')
const previousbutton = document.querySelector('#previousbutton')
const nextbutton = document.querySelector('#nextbutton')
const closeButton = document.querySelector('#closebutton')
const lightbox = document.querySelector('#lightbox')

function changeQuantity(){
    quantity = 0
    plus.addEventListener('click', function(){
        quantity = quantityValue.innerHTML
        quantity++
        quantityValue.innerHTML = quantity
        addToCart(quantity)
    })
    minus.addEventListener('click', function(){
        if(quantity == 0){
            console.log('Quantity is at the minimum value')
        }
        else{
            quantity = quantityValue.innerHTML
            quantity--
            quantityValue.innerHTML = quantity
            addToCart(quantity)
        }
    })
    /* console.log(quantity) */
}
 

function addToCart(qtty){
    button.addEventListener('click', function(){
        if(quantityValue.innerHTML == 0){
            console.log('nun')
            cartNum.style.display = 'none'
            span1.style.display = 'block'
            maincart.style.display = 'none'
        }
        else{
            cartNum.style.display = 'block'
            cartNum.innerHTML = qtty
            span1.style.display = 'none'
            maincart.style.display = 'block'
            itemQuantity.innerHTML = qtty
            x = 125*qtty
            totalPrice.innerHTML = x.toFixed(2)
        }
    })
}

function clearCart(){
    delimg.addEventListener('click', function(){
        maincart.style.display = 'none'
        span1.style.display = 'block'
        quantityValue.innerHTML = 0
        cartNum.style.display = 'none'
    })
}

function displayCart(){
    d3.addEventListener('click', function(){
        if (lostdiv.style.display == 'none'){
            lostdiv.style.display = 'block'
        }
        else{
            lostdiv.style.display = 'none'
        }
    })
}

function changePic(){
    imgs.forEach(pic => {
        pic.addEventListener('click', function(){
            /* console.log(imgs[0])*/
            imgs[0].style.opacity = '1' 
            imgs[0].parentElement.style.border = 'none' 
            imgs[1].style.opacity = '1' 
            imgs[1].parentElement.style.border = 'none' 
            imgs[2].style.opacity = '1' 
            imgs[2].parentElement.style.border = 'none' 
            imgs[3].style.opacity = '1' 
            imgs[3].parentElement.style.border = 'none' 
            pic1.style.border = 'none'
            ig1.style.opacity = '1'
            bigImg.src = this.src
            this.style.opacity = '0.3'
            this.parentElement.style.border = 'solid 2px hsl(26, 100%, 55%)'
            this.parentElement.style.borderRadius = '10px'
        })
    })
}

function lightboxPic(){
    himg.forEach(spic => {
        spic.addEventListener('click', function(){
            himg[0].style.opacity = '1'
            himg[1].style.opacity = '1'
            himg[2].style.opacity = '1'
            himg[3].style.opacity = '1'
            hugeimg.src = this.src
            hugeimg.dataset.itemIndex = this.dataset.itemIndex
            this.style.opacity = '0.3'
        })
    })
}

function next(){
    nextbutton.addEventListener('click', function(){
        himg[0].style.opacity = '1'
        himg[1].style.opacity = '1'
        himg[2].style.opacity = '1'
        himg[3].style.opacity = '1'
        x = hugeimg.dataset.itemIndex
        if (x == 0){
            hugeimg.src = himg[1].src
            hugeimg.dataset.itemIndex = 1
            himg[1].style.opacity = '0.3'
        }
        if (x == 1){
            hugeimg.src = himg[2].src
            hugeimg.dataset.itemIndex = 2
            himg[2].style.opacity = '0.3'    
        }
        if (x == 2){
            hugeimg.src = himg[3].src
            hugeimg.dataset.itemIndex = 3
            himg[3].style.opacity = '0.3'
        }
        if (x == 3){
            hugeimg.src = himg[0].src
            hugeimg.dataset.itemIndex = 0
            himg[0].style.opacity = '0.3'
        }
    })
}

function previous(){
    previousbutton.addEventListener('click', function(){
        himg[0].style.opacity = '1'
        himg[1].style.opacity = '1'
        himg[2].style.opacity = '1'
        himg[3].style.opacity = '1'
        x = hugeimg.dataset.itemIndex
        if (x == 0){
            hugeimg.src = himg[3].src
            hugeimg.dataset.itemIndex = 3
            himg[3].style.opacity = '0.3'
        }
        if (x == 1){
            hugeimg.src = himg[0].src
            hugeimg.dataset.itemIndex = 0
            himg[0].style.opacity = '0.3'
        }
        if (x == 2){
            hugeimg.src = himg[1].src
            hugeimg.dataset.itemIndex = 1
            himg[1].style.opacity = '0.3'
        }
        if (x == 3){
            hugeimg.src = himg[2].src
            hugeimg.dataset.itemIndex = 2
            himg[2].style.opacity = '0.3'
        }
    })
}

function close(){
    closeButton.addEventListener('click', function(){
        lightbox.style.display = 'none'
    })
}

function open(){
    bigImg.addEventListener('click', function(){
        lightbox.style.display = 'block'
    })
}


changeQuantity() 
clearCart()
displayCart()
changePic()
lightboxPic()
next()
previous()
close()
open()

