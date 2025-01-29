
let bagItemObjects;
onLoad();


function onLoad(){
    loadBagItemObject();
    displayBagItem();
    displayBagSummary()
    // loadBagItemObject();
}
function loadBagItemObject(){
    console.log(bagItem);
    bagItemObjects=bagItem.map(itemId=>{
        for(i=0;i<items.length;i++){
            if(itemId==items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}

function bagItemCount(){
    let bagCount=document.querySelector('.bag_count');
    if(bagItem.length>0){
        bagCount.style.visibility='visible';
       bagCount.innerText=bagItem.length;
   }
    else{
        bagCount.style.visibility='hidden';
    }
 }

function removeFromBag(ItemId){
    bagItem=bagItem.filter(bagItemId=>bagItemId!=ItemId);
    localStorage.setItem('bagItem',JSON.stringify(bagItem));
    loadBagItemObject();
    displayBagItem();
    bagItemCount();
    displayBagSummary()
}

function displayBagItem(){
    let containerElement=document.querySelector('.bag-items-container');
    let innerHTMl='';
     bagItemObjects.forEach (Item => {
        console.log(Item);

innerHTMl+=
   ` <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${Item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${Item.company}</div>
      <div class="item-name">${Item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${Item.current_price}</span>
        <span class="original-price">Rs ${Item.original_price}</span>
        <span class="discount-percentage">(${Item.discount}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${Item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${Item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${Item.id}) ">X</div>
  </div>
  `;
//}
});
containerElement.innerHTML=innerHTMl;
}


function displayBagSummary(){
    let bagSummaryElement=document.querySelector(".bag-summary");
    let total_MRP=0;
    let total_discount=0;
    let total_amount=0;
    let convenience_fee=49;
    bagItemObjects.forEach(bagItems=>{
        total_MRP+=bagItems.original_price;
        total_discount+=bagItems.original_price - bagItems.current_price;
        total_amount=total_MRP - total_discount + convenience_fee;
    })
    bagSummaryElement.innerHTML=
    `<div class="bag-details-container">
              <div class="price-header">PRICE DETAILS (${bagItem.length} Items) </div>
              <div class="price-item">
                <span class="price-item-tag">Total MRP</span>
                <span class="price-item-value">Rs${total_MRP}</span>
              </div>
              <div class="price-item">
                <span class="price-item-tag">Discount on MRP</span>
                <span class="price-item-value priceDetail-base-discount">-Rs ${total_discount}</span>
              </div>
              <div class="price-item">
                <span class="price-item-tag">Convenience Fee</span>
                <span class="price-item-value">Rs 99</span>
              </div>
              <hr>
              <div class="price-footer">
                <span class="price-item-tag">Total Amount</span>
                <span class="price-item-value">Rs ${total_amount}</span>
              </div>
            </div>
            <button class="btn-place-order">
              <div class="css-xjhrni">PLACE ORDER</div>
            </button>`
}


document.querySelector('.btn-place-order').addEventListener('click',()=>{alert('Sorry for Inconvenience, When i complete my full stack i will definitely complete this');});