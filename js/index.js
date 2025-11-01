const image = document.getElementById("product-image");
const title = document.getElementById("product-title");
const price = document.getElementById("product-price");
const desc = document.getElementById("product-description");


const btn = document.getElementById("addtocart");


 let num=document.getElementById("cartnum");
fetch("https://fakestoreapi.com/products/3")
  .then(response => response.json())
  .then(product  => {
    image.src = product.image;
    title.textContent = product.title;
    price.textContent = `$${product.price}`;
    desc.textContent = product.description;
  })
       .catch(error => console.log("Error fetching product:", error));
let count=0;
function add() {
        count=count+1;
        num.textContent=count;
    }
      

btn.addEventListener("click", () => {
     alert("✅ Added to cart!!!!");

    add();
});
