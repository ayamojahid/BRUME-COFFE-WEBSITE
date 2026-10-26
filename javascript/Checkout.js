

const ProduitcoffeeCart =document.getElementById("ScoffeeCart");

let coffeeCart = [
  { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "../assets/images/caffeChek1.jpg" },
  { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "../assets/images/latter.png" },
  { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "../assets/images/BlackMugNoir.png" }
];



function RemplircoffeeCart() {
ProduitcoffeeCart.innerHTML="";

coffeeCart.forEach(function(produit) {
  ProduitcoffeeCart.innerHTML+=`
  
    <div class="produit" data-id="${produit.id}">
            
    <img src="${produit.image}" width="4%"  height="auto" alt="${produit.name}">
    <div class="details">
          <h3>${produit.name}</h3>
          <p>Prix : ${produit.price.toFixed(2)} DH</p>  
    </div>

    <div class="quantite">
          <button type="button" aria-label="Diminuer la quantité">-</button>

          <p>${produit.quantity}</p>

          <button type="button" aria-label="Augmenter la quantité">+</button>
        </div>


    </div>
  `
}) };

RemplircoffeeCart();
