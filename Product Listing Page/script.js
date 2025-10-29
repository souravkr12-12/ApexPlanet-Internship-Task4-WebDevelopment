const products=[
    {id:1,name:"Smartphone",category:"electronics",price:15000,rating:4.5,img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627"},
    {id:2,name:"Laptop",category:"electronics",price:"55000",rating:4.8,img:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"},
    {id:3,name:"T-shirt",category:"clothing",price:2500,rating:4.2,img:"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"},
    {id:4,name:"Headphones",category:"electronics",price:2500,rating:4.6,img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"},
    {id:5,name:"Sneakers",category:"clothing",price:3000,rating:4.6,img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"},
    {id:6,name:"Watch",category:"accessories",price:2000,rating:3.9,img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1180"},
    {id:7,name:"Backpack",category:"accessories",price:1800,rating:4.3,img:"https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688"}
];

const productContainer=document.getElementById("productContainer");
const categoryFilter=document.getElementById("categoryFilter");
const sortOption=document.getElementById("sortOption");

function displayProducts(list){
    productContainer.innerHTML="";
    list.forEach(p=>{
        const card=document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`
        <img src="${p.img}" alt="${p.name}">
        <div class="card-content">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <p class="rating">⭐ ${p.rating}</p>
      </div>
        `;
        productContainer.appendChild(card);
    });
}

displayProducts(products);

function updateDisplay(){
   let filtered=[...products];
   const selectedCategory=categoryFilter.value;
   const sortValue=sortOption.value; 

if(selectedCategory!=="all"){
    filtered=filtered.filter(p=>p.category===selectedCategory);
}

if(sortValue==="priceLow")
{
    filtered.sort((a,b)=>a.price-b.price);
}else if(sortValue==="priceHigh"){
    filtered.sort((a,b)=>b.price-a.price)
}else if(sortValue==="ratingHigh"){
    filtered.sort((a,b)=>b.rating-a.rating);
}

displayProducts(filtered);
}

categoryFilter.addEventListener("change",updateDisplay);
sortOption.addEventListener("change",updateDisplay);