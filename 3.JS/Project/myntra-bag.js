let itemInBag = document.querySelector('.main-left');


const bagItems = [
  {
    image: "../Images/myntra/1.jpg",
    alt: "Img1",
    heading: "Carlton London",
    para: "Rhodium-Plated CZ Floral Studs",
    current_price: "Rs 606",
    original_price: "Rs 1045",
    discount_price: "(42% OFF)",
    delivery: "10 Oct 2023",
  },

  {
    image: "../Images/myntra/2.jpg",
    alt: "Img2",
    heading: "CUKOO",
    para: "Women Padded Halter Neck Swimmin...",
    current_price: "Rs 1507",
    original_price: "Rs 2599",
    discount_price: "(42% OFF)",
    delivery: "12 Oct 2023",
  },

  {
    image: "../Images/myntra/3.jpg",
    alt: "Img3",
    heading: "NUEVOSDAMAS",
    para: "Women Red & White Printed A-Line Kne...",
    current_price: "Rs 495",
    original_price: "Rs 1599",
    discount_price: "(69% OFF)",
    delivery: "14 Oct 2023",
  },

  {
    image: "../Images/myntra/4.jpg",
    alt: "Img4",
    heading: "ADIDAS",
    para: "Indian Cricket ODI Jersey",
    current_price: "Rs 999",
    original_price: "Rs 999",
    discount_price: "(0% OFF)",
    delivery: "11 Oct 2023",
  },

  {
    image: "../Images/myntra/5.jpg",
    alt: "Img5",
    heading: "Roadster",
    para: "Pure Cotton T-shirt",
    current_price: "Rs 489",
    original_price: "Rs 1399",
    discount_price: "(65% OFF)",
    delivery: "13 Oct 2023",
  },

  {
    image: "../Images/myntra/6.jpg",
    alt: "Img6",
    heading: "Nike",
    para: "Men ReactX Running Shoes",
    current_price: "Rs 14995",
    original_price: "Rs 14995",
    discount_price: "(0% OFF)",
    delivery: "15 Oct 2023",
  },

  {
    image: "../Images/myntra/7.jpg",
    alt: "Img7",
    heading: "The Indian Garage Co",
    para: "Men Slim Fit Regular Shorts",
    current_price: "Rs 639",
    original_price: "Rs 1599",
    discount_price: "(60% OFF)",
    delivery: "10 Oct 2023",
  },

  {
    image: "../Images/myntra/8.jpg",
    alt: "Img8",
    heading: "Nivea",
    para: "Men Fresh Deodorant 150ml",
    current_price: "Rs 142",
    original_price: "Rs 205",
    discount_price: "(50% OFF)",
    delivery: "16 Oct 2023",
  },
];


let innerBag = "";
  
bagItems.forEach(val => {
  innerBag += `
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
  
    <div class="remove-item">X</div>
    `;
});
  
itemInBag.innerHTML = innerBag;

