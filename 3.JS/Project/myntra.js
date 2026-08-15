let itemsElement = document.querySelector('.products');
const items = [
  {
    image: "../Images/myntra/1.jpg",
    alt: "Img1",
    rating: {
      stars: 4.5,
      noOfStars: 1400,
    },
    heading: "Carlton London",
    para: "Rhodium-Plated CZ Floral Studs",
    current_price: "Rs 606",
    original_price: "Rs 1045",
    discount_price: "(42% OFF)",
  },

  {
    image: "../Images/myntra/2.jpg",
    alt: "Img2",
    rating: {
      stars: 4.3,
      noOfStars: 24,
    },
    heading: "CUKOO",
    para: "Women Padded Halter Neck Swimmin...",
    current_price: "Rs 1507",
    original_price: "Rs 2599",
    discount_price: "(42% OFF)",
  },

  {
    image: "../Images/myntra/3.jpg",
    alt: "Img3",
    rating: {
      stars: 4.1,
      noOfStars: 249,
    },
    heading: "NUEVOSDAMAS",
    para: "Women Red & White Printed A-Line Kne...",
    current_price: "Rs 495",
    original_price: "Rs 1599",
    discount_price: "(69% OFF)",
  },

  {
    image: "../Images/myntra/4.jpg",
    alt: "Img4",
    rating: {
      stars: 5,
      noOfStars: 10,
    },
    heading: "ADIDAS",
    para: "Indian Cricket ODI Jersey",
    current_price: "Rs 999",
    original_price: "Rs 999",
    discount_price: "(0% OFF)",
  },

  {
    image: "../Images/myntra/5.jpg",
    alt: "Img5",
    rating: {
      stars: 4.2,
      noOfStars: 3500,
    },
    heading: "Roadster",
    para: "Pure Cotton T-shirt",
    current_price: "Rs 489",
    original_price: "Rs 1399",
    discount_price: "(65% OFF)",
  },

  {
    image: "../Images/myntra/6.jpg",
    alt: "Img6",
    rating: {
      stars: 0,
      noOfStars: 0,
    },
    heading: "Nike",
    para: "Men ReactX Running Shoes",
    current_price: "Rs 14995",
    original_price: "Rs 14995",
    discount_price: "(0% OFF)",
  },

  {
    image: "../Images/myntra/7.jpg",
    alt: "Img7",
    rating: {
      stars: 4.2,
      noOfStars: 388,
    },
    heading: "The Indian Garage Co",
    para: "Men Slim Fit Regular Shorts",
    current_price: "Rs 639",
    original_price: "Rs 1599",
    discount_price: "(60% OFF)",
  },

  {
    image: "../Images/myntra/8.jpg",
    alt: "Img8",
    rating: {
      stars: 4.2,
      noOfStars: 5200,
    },
    heading: "Nivea",
    para: "Men Fresh Deodrant 150ml",
    current_price: "Rs 142",
    original_price: "Rs 205",
    discount_price: "(50% OFF)",
  },
];

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
              
              <button class="bag-btn" >Add to Bag</button>
            </div>

    </div>
  `;
});

itemsElement.innerHTML = productsHTML;

let addToBagElement = document.querySelectorAll('.bag-btn');
let bagCount = document.querySelector(".carry-bag").querySelector("sup"); 

let count = Number(localStorage.getItem("Items")) || 0;

let itemsInBag = event => {
  count++;
  if(count > 0){
    bagCount.classList.add('js-itemsInBag');
  }
  bagCount.classList.add('js-itemsInBag');
  bagCount.innerHTML = count;
  localStorage.setItem("Items" , `${count}`);
};


addToBagElement.forEach(val => {
  val.addEventListener('click' , itemsInBag);
});



