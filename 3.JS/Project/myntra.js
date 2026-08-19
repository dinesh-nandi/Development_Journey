let itemsElement = document.querySelector('.products');


if(itemsElement){
  let productsHTML = "";
  
  items.forEach( item => {
    productsHTML +=`
      <div class="items">
    
              <img src="${item.image}" alt="${item.alt}">
  
              <div class="item-description">
                <div class="rating">
                  <p>${item.rating.stars}⭐ | ${item.rating.noOfStars}</p>
                </div>
      
                <div class="heading">
                  <h4>${item.heading}</h4>
                  <p>${item.para}</p>
                </div>
      
                <div class="price">
                  <p>${item.current_price} <strike>${item.original_price}</strike> <span class="discount">${item.discount_price}</span></p>
                </div>
                
                <button class="bag-btn" data-id="${item.id}" >Add to Bag</button>
              </div>
  
      </div>
    `;
  });
  
  itemsElement.innerHTML = productsHTML;

}


let addToBagElement = document.querySelectorAll('.bag-btn');


let bagItems = JSON.parse(localStorage.getItem("BagItems")) || [];
let bagCount = document.querySelector(".carry-bag").querySelector("sup"); 

let count = bagItems.length;

if(count > 0){
  bagCount.innerHTML = count;
  bagCount.classList.add('js-itemsInBag');
}

let itemsInBag = event => {

  let id = Number(event.target.dataset.id);

  bagItems.push(id);

  localStorage.setItem("BagItems", JSON.stringify(bagItems));

  bagCount.classList.add("js-itemsInBag");
  bagCount.innerHTML = bagItems.length;
};

addToBagElement.forEach(val => {
  val.addEventListener('click' , itemsInBag);
});

function updateBagCount(){
  let bagItems = JSON.parse(localStorage.getItem("BagItems")) || [];

  if (bagItems.length > 0) {
    bagCount.innerHTML = bagItems.length;
    bagCount.classList.add("js-itemsInBag");
    } else {
      bagCount.innerHTML = "";
      bagCount.classList.remove("js-itemsInBag");
    }
}

updateBagCount();
window.addEventListener("focus", updateBagCount);
window.addEventListener("pageshow", updateBagCount);