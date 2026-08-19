console.log(items);
let itemInBag = document.querySelector(".main-left");

let bagItems = JSON.parse(localStorage.getItem("BagItems")) || [];
let bagCount = document.querySelector(".carry-bag sup");

if(bagItems.length > 0){
  bagCount.innerHTML = bagItems.length;
  bagCount.classList.add("js-itemsInBag");
}

let selectedItems = [];

bagItems.forEach(id => {
  let product = items.find(item => item.id === id);

  if(product){
    selectedItems.push(product);
  }
});

let innerBag = "";
  
selectedItems.forEach(val => {
  innerBag += `
    <div class="bag-item">
      <div class="image">
        <img src="${val.image}" alt="${val.alt}">
      </div>

      <div class="img-description">
        <p class="brand">${val.heading}</p>
        <p class="brand-desc">${val.para}</p>

        <span class="current_price"><strong>${val.current_price}</strong></span>
        <span class="original_price">${val.original_price}</span>
        <span class="discount_price">${val.discount_price}</span>

        <p class="delivery"><strong>14 days</strong> return available</p>
        <p class="delivery-time">Delivery by <span class="date">${val.delivery}</span></p>
      </div>

      <div class="remove-item" data-id="${val.id}">X</div>
    </div>
  `;
});
  
itemInBag.innerHTML = innerBag;

let removeButtons = document.querySelectorAll(".remove-item");

removeButtons.forEach(button => {
  button.addEventListener("click", removeItem);
});

function removeItem(event){
  let id = Number(event.target.dataset.id);
  bagItems = bagItems.filter(itemId => itemId !== id);
  localStorage.setItem("BagItems",  JSON.stringify(bagItems));
  location.reload();
}

let itemsCountElement = document.querySelector(".items-count");
let totalMrpElement = document.querySelector(".total-mrp");
let discountMrpElement = document.querySelector(".discount-price");
let convenienceFeeElement = document.querySelector(".Convenience-fee");
let totalAmountElement = document.querySelector(".total-amount");

let totalMrp = 0;
let discountMrp = 0;

selectedItems.forEach(product => {
  let original = Number(product.original_price.replace(/[^\d]/g , ""));
  let current = Number(product.current_price.replace(/[^\d]/g , ""));

  totalMrp += original;
  discountMrp += (original - current);
});

let convenienceFee = selectedItems.length > 0 ? 99 : 0;
let totalAmount = totalMrp - discountMrp + convenienceFee;

itemsCountElement.innerHTML = selectedItems.length;
totalMrpElement.innerHTML = `${totalMrp}`;
discountMrpElement.innerHTML = `${discountMrp}`;
convenienceFeeElement.innerHTML = `${convenienceFee}`;
totalAmountElement.innerHTML = `${totalAmount}`;