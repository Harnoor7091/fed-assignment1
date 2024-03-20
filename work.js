document.addEventListener('DOMContentLoaded', function () {
    const container = document.createElement('div');
    container.classList.add('container');

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left');

    const lHead = document.createElement('h1');
    lHead.classList.add('lhead');
    lHead.textContent = 'Harnoor Kaur';
    leftDiv.appendChild(lHead);

    const itemsDiv = document.createElement('div');
    itemsDiv.classList.add('items');

    const item1Div = document.createElement('div');
    item1Div.classList.add('item');
    const item1Img = document.createElement('img');
    item1Img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozhNHsLAXNqqaa9oYX6rp-wDhAnnkLDClmQ&usqp=CAU';
    item1Img.alt = 'clinique foundation';
    const item1Button = document.createElement('button');
    item1Button.classList.add('atcart');
    item1Button.id = 'atc1';
    item1Button.textContent = 'Add to Cart';
    item1Div.appendChild(item1Img);
    item1Div.appendChild(item1Button);

    const item2Div = document.createElement('div');
    item2Div.classList.add('item');
    const item2Img = document.createElement('img');
    item2Img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthDW1PQIYh3rwH7PvIIgbaPHqqwUjNaGdHw&usqp=CAU';
    item2Img.alt = 'Nutrabay-Creatine';
    const item2Button = document.createElement('button');
    item2Button.classList.add('atcart');
    item2Button.id = 'atc2';
    item2Button.textContent = 'Add to Cart';
    item2Div.appendChild(item2Img);
    item2Div.appendChild(item2Button);

    itemsDiv.appendChild(item1Div);
    itemsDiv.appendChild(item2Div);

    leftDiv.appendChild(itemsDiv);

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right');

    const rTitleDiv = document.createElement('div');
    rTitleDiv.classList.add('rtitle');

    const rHead = document.createElement('h1');
    rHead.classList.add('rhead');
    rHead.textContent = 'Cart';
    rTitleDiv.appendChild(rHead);

    const cartImg = document.createElement('img');

    rightDiv.appendChild(rTitleDiv);

    const separatorDiv = document.createElement('div');
    separatorDiv.classList.add('separator');
    rightDiv.appendChild(separatorDiv);

    const cartItemsContainerDiv = document.createElement('div');
    cartItemsContainerDiv.classList.add('cartItemsContainer');

    const cartItem1Div = document.createElement('div');
    cartItem1Div.classList.add('cartItem');
    cartItem1Div.id = 'cartItem1';

    const cardStructDiv1 = document.createElement('div');
    cardStructDiv1.classList.add('cardStruct');

    const item1ImgCart = document.createElement('img');
    item1ImgCart.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozhNHsLAXNqqaa9oYX6rp-wDhAnnkLDClmQ&usqp=CAU';
    item1ImgCart.alt = 'img1';
    item1ImgCart.id = 'item1Img';
    cardStructDiv1.appendChild(item1ImgCart);

    const cardInfoDiv1 = document.createElement('div');
    cardInfoDiv1.classList.add('cardInfo');

    const item1Head = document.createElement('h1');
    item1Head.id = 'item1head';
    item1Head.textContent = 'clinique foundation';
    cardInfoDiv1.appendChild(item1Head);

    const qtyDiv1 = document.createElement('div');
    qtyDiv1.classList.add('qty');

    const item1Qty = document.createElement('p');
    item1Qty.id = 'item1qty';
    item1Qty.textContent = 'Qty : ';
    qtyDiv1.appendChild(item1Qty);

    const decreaseButton1 = document.createElement('button');
    decreaseButton1.classList.add('indecbutton');
    decreaseButton1.id = 'decrease1';
    decreaseButton1.textContent = '-';
    const countDiv1 = document.createElement('div');
    countDiv1.classList.add('count');
    countDiv1.id = 'count1';
    countDiv1.textContent = '1';
    const increaseButton1 = document.createElement('button');
    increaseButton1.classList.add('indecbutton');
    increaseButton1.id = 'increase1';
    increaseButton1.textContent = '+';

    qtyDiv1.appendChild(decreaseButton1);
    qtyDiv1.appendChild(countDiv1);
    qtyDiv1.appendChild(increaseButton1);

    cardInfoDiv1.appendChild(qtyDiv1);

    cardStructDiv1.appendChild(cardInfoDiv1);

    cartItem1Div.appendChild(cardStructDiv1);

    const cartItem2Div = document.createElement('div');
    cartItem2Div.classList.add('cartItem');
    cartItem2Div.id = 'cartItem2';

    const cardStructDiv2 = document.createElement('div');
    cardStructDiv2.classList.add('cardStruct');

    const item2ImgCart = document.createElement('img');
    item2ImgCart.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthDW1PQIYh3rwH7PvIIgbaPHqqwUjNaGdHw&usqp=CAU';
    item2ImgCart.alt = 'img2';
    item2ImgCart.id = 'item2Img';
    cardStructDiv2.appendChild(item2ImgCart);

    const cardInfoDiv2 = document.createElement('div');
    cardInfoDiv2.classList.add('cardInfo');

    const item2Head = document.createElement('h1');
    item2Head.id = 'item2head';
    item2Head.textContent = 'lipstick';
    cardInfoDiv2.appendChild(item2Head);

    const qtyDiv2 = document.createElement('div');
    qtyDiv2.classList.add('qty');

    const item2Qty = document.createElement('p');
    item2Qty.id = 'item2qty';
    item2Qty.textContent = 'Qty : ';
    qtyDiv2.appendChild(item2Qty);

    const decreaseButton2 = document.createElement('button');
    decreaseButton2.classList.add('indecbutton');
    decreaseButton2.id = 'decrease2';
    decreaseButton2.textContent = '-';
    const countDiv2 = document.createElement('div');
    countDiv2.classList.add('count');
    countDiv2.id = 'count2';
    countDiv2.textContent = '1';
    const increaseButton2 = document.createElement('button');
    increaseButton2.classList.add('indecbutton');
    increaseButton2.id = 'increase2';
    increaseButton2.textContent = '+';

    qtyDiv2.appendChild(decreaseButton2);
    qtyDiv2.appendChild(countDiv2);
    qtyDiv2.appendChild(increaseButton2);

    cardInfoDiv2.appendChild(qtyDiv2);

    cardStructDiv2.appendChild(cardInfoDiv2);

    cartItem2Div.appendChild(cardStructDiv2);

    cartItemsContainerDiv.appendChild(cartItem1Div);
    cartItemsContainerDiv.appendChild(cartItem2Div);

    rightDiv.appendChild(cartItemsContainerDiv);

    container.appendChild(leftDiv);
    container.appendChild(rightDiv);

    document.body.appendChild(container);







    
var countDisplay1 = document.getElementById("count1");
var count1 = 1;
var count2 = 1;
var item1removed = false;

document.getElementById("increase1").addEventListener('click', function(){
    count1++;
    countDisplay1.textContent = count1;
})

document.getElementById("decrease1").addEventListener('click', function(){
    
    count1--;
    if(count1 <= 0){
        if(window.confirm("Remove Item from Cart")){
        item1removed = true;
        document.getElementById("cartItem1").classList.add("removeItem");
        document.getElementById("item1head").textContent = "";
        document.getElementById("item1qty").textContent = "";
        document.getElementById("increase1").style.display = 'none';
        document.getElementById("decrease1").style.display = 'none';
        document.getElementById("count1").textContent = "";
        document.getElementById("item1Img").style.display = 'none';
        }
    }
    else{
        countDisplay1.textContent = count1;
    }
})

document.getElementById("atc1").addEventListener('click', function(){
    // count1++;
    // countDisplay.textContent = count1;
    if(item1removed){
        if(window.confirm("Add Item to Cart")){
        item1removed = false;
        document.getElementById("cartItem1").classList.remove("removeItem");
        document.getElementById("item1head").textContent = "clinique foundation";
        document.getElementById("item1qty").textContent = "Qty : ";
        document.getElementById("increase1").style.display = 'block';
        document.getElementById("decrease1").style.display = 'block';
        document.getElementById("count1").textContent = 1;
        document.getElementById("item1Img").style.display = 'block';
        }
        
    }
    else{
        alert("Item is Already in Cart!")
    }
})




var countDisplay2 = document.getElementById("count2");
var count2 = 1;
var item2removed = false;

document.getElementById("increase2").addEventListener('click', function(){
    count2++;
    countDisplay2.textContent = count2;
})

document.getElementById("decrease2").addEventListener('click', function(){
    
    count2--;
    if(count2 <= 0){
        if(window.confirm("Remove Item from Cart")){
        item2removed = true;
        document.getElementById("cartItem2").classList.add("removeItem");
        document.getElementById("item2head").textContent = "";
        document.getElementById("item2qty").textContent = "";
        document.getElementById("increase2").style.display = 'none';
        document.getElementById("decrease2").style.display = 'none';
        document.getElementById("count2").textContent = "";
        document.getElementById("item2Img").style.display = 'none';
        }
    }
    else{
        countDisplay2.textContent = count2;
    }
})

document.getElementById("atc2").addEventListener('click', function(){
    // count1++;
    // countDisplay.textContent = count1;
    if(item2removed){
        if(window.confirm("Add Item to Cart")){
        item2removed = false;
        document.getElementById("cartItem2").classList.remove("removeItem");
        document.getElementById("item2head").textContent = "lipstick";
        document.getElementById("item2qty").textContent = "Qty : ";
        document.getElementById("increase2").style.display = 'block';
        document.getElementById("decrease2").style.display = 'block';
        document.getElementById("count2").textContent = 1;
        document.getElementById("item2Img").style.display = 'block';
        }
        
    }
    else{
        alert("Item is Already in Cart!")
    }
})
})