
let bagItem;
onLode();

function onLode(){
   let bagItemStr= localStorage.getItem('bagItem');
    bagItem=bagItemStr ? JSON.parse(bagItemStr):[];  
    displayItemOnHome();
    bagItemCount();
}

function addToBag(itemID){
    bagItem.push(itemID);
    localStorage.setItem('bagItem',JSON.stringify(bagItem));
    bagItemCount();
};
 
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

function displayItemOnHome(){
    let itemscontainer=document.querySelector('.content');
    if(!itemscontainer){
        return;
    }

let innerHtml='';
items.forEach(item => {
    
    innerHtml +=`    
            <div class="product_content">
                <img src=${item.image} class="product_image"alt="item image">
                <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
                <div class="compny_name">${item.company}</div>
                <div class="item_name">${item.item_name}</div>
                <div class="price">
                    <span class="current_price">Rs ${item.current_price} </span>
                    <span class="original_price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount}% OFF)</span>
                </div>
                <button class="addToBag" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>  `;
    
});
itemscontainer.innerHTML=innerHtml;
}
// displayItemOnHome();
