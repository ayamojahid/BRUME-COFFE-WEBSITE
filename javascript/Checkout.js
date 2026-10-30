
const ProduitcoffeeCart = document.getElementById("ScoffeeCart");

let coffeeCart = [
  { id: "c2", name: "Cappuccino Mousseux", price: 8.00, quantity: 2, image: "../assets/images/caffeChek1.jpg" },
  { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "../assets/images/latter.png" },
  { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "../assets/images/BlackMugNoir.png" }
];

function RemplircoffeeCart() {
  ProduitcoffeeCart.innerHTML = "";

  coffeeCart.forEach(function (produit) {
    ProduitcoffeeCart.innerHTML += `
      <div class="produit" data-id="${produit.id}">
        <img src="${produit.image}" width="4%" height="auto" alt="${produit.name}">

        <div class="details">
          <h3>${produit.name}</h3>
       <p>Prix : ${(produit.price * produit.quantity).toFixed(2)} DH</p>
        </div>

        <div class="quantite">
          <button class="moins" type="button">-</button>
          <p class="quantite-valeur">${produit.quantity} </p>
          <button class="plus" type="button">+</button>
        </div>
      </div>
    `;
  });

//     const augmenteBtn = ProduitcoffeeCart.querySelectorAll(".plus");
// augmenteBtn.forEach(function (btn, index) {
//   btn.addEventListener("click", function () {
//     coffeeCart[index].quantity++;
//     // console.log(index)
//     RemplircoffeeCart();
//     console.log(coffeeCart[index].quantity)
//   });
// });

// const dumunieBtn = document.querySelectorAll(".moins");
// console.log(dumunieBtn)

// dumunieBtn.forEach(function (btn, index) {

//   btn.addEventListener("click", () => {

//     if (coffeeCart[index].quantity > 1) {

//       coffeeCart[index].quantity--;
//     }


//     RemplircoffeeCart();
//     console.log(coffeeCart[index].quantity)


//   });
// });
ActiverBoutons();
Calculer() ;

}




let price=0;
let tableInfo=[];

function ActiverBoutons() {
  const augmenteBtn = ProduitcoffeeCart.querySelectorAll(".plus");
  const diminueBtn = ProduitcoffeeCart.querySelectorAll(".moins");

  for (let i = 0; i < augmenteBtn.length; i++) {

    augmenteBtn[i].addEventListener("click", function () {
       coffeeCart[i].quantity++;
  RemplircoffeeCart();
    
    });
    
    diminueBtn[i].addEventListener("click", function () {
      if (coffeeCart[i].quantity > 1) {
    coffeeCart[i].quantity--;
      RemplircoffeeCart();
     
  }
      
    });
  }
}
RemplircoffeeCart();
Calculer();



let total=0;
function Calculer() {
  const prTotal = document.getElementById("totalPanier");
  let total=0;
for(let i = 0 ;  i <coffeeCart.length ; i++) {
  total+= coffeeCart[i].price*coffeeCart[i].quantity;
prTotal.textContent=`${total} DH`;
}

return total;

}

const coffeeProducts = [
  { id: "c1", name: "Espresso Intense",quantity: 1, category: "Base", price: 2.50, image: "../assets/images/EspressoIntense.png" },
  { id: "c2", name: "Cappuccino Mousseux",quantity: 1, category: "Classique", price: 4.00, image: "../assets/images/CappuccinoMousseux.png" },
  { id: "c3", name: "Latte Caramel",quantity: 1, category: "Gourmand", price: 4.50, image: "../assets/images/LatteCaramel.png" },
  { id: "c4", name: "Flat White",quantity: 1, category: "Classique", price: 3.80, image: "../assets/images/FlatWhite.png" },
  { id: "c5", name: "Iced Matcha Latte",quantity: 1, category: "Froid", price: 5.00, image: "../assets/images/IcedMatchaLatte.png" },
  { id: "c6", name: "Cold Brew",quantity: 1, category: "Froid", price: 4.20, image: "../assets/images/ColdBrewCoffee.png" },
  { id: "c7", name: "Cookie Pépites", quantity: 1,category: "Snack", price: 2.00, image: "../assets/images/ChocolateChipCookie.png" },
  { id: "c8", name: "Mug Isotherme Noir", quantity: 1, category: "Accessoire", price: 15.00, image: "../assets/images/BlackMugNoir.png" },
  { id: "c9", name: "Filtres Papier V60 (x100)",quantity: 1, category: "Accessoire", price: 6.50, image: "../assets/images/V60PaperCoffeeFilters.png" },
  { id: "c10", name: "Tote Bag 'Coffee Lover", quantity: 1,category: "Accessoire", price: 12.00, image: "../assets/images/CoffeeLoverToteBag.png" }
];


const Quick = document.getElementById("listeProduits");
console.log(Quick);

function afficherQuick(produits) {
    Quick.innerHTML = "";
  produits.forEach(function(produit){
    
   Quick.innerHTML+=`
    <div class="produit" data-id="${produit.id}" id="divFirst">
    
    
        <img src="${produit.image}" width="10%" height="auto" alt="${produit.name}">

        <div class="details">
          <h3>${produit.name}</h3>
        </div>
<p>Prix : ${produit.price.toFixed(2)}</p>
        <div class="quantite">
        
          <p class="quantite-valeur">CA: ${produit.category} </p>
         
        </div>

        <div>   <button  type="button" class="buttoncoffeProducts"  >Ajouter</button>  </div>  
      </div>   
   `
  })
}
afficherQuick(coffeeProducts);


const AddModal = document.getElementById("quickAddModal");
const addBTN =document.getElementById("ajouteBTN");

addBTN.addEventListener("click" , function() {
AddModal.showModal();
})


const fermerBTN = document.getElementById("fermerModal");

fermerBTN.addEventListener("click", function() {
  AddModal.close();
});

 

const searchModalProduit = document.getElementById("searchProduit");


searchModalProduit.addEventListener("input",  () => {

  let stock = searchModalProduit.value.toLowerCase();




  const resultat = coffeeProducts.filter((opt) => {
    return opt.name.toLowerCase().includes(stock);
  });


  afficherQuick(resultat);

});



const AllButton =document.querySelectorAll(".buttoncoffeProducts");

const divFirst =document.getElementById("divFirst");







for(let i = 0 ; i< AllButton.length ; i++) { 
 AllButton[i].addEventListener("click", function() {
    let produit =AllButton[i].closest(".produit");
  let id = produit.dataset.id;
  let newProduit;

  for(let j = 0 ; j<coffeeProducts.length ; j++ ) {
    if(coffeeProducts[j].id    ===  id ) {
     let newProduit = coffeeProducts[j];

      console.log(newProduit);

      coffeeCart.push(newProduit);

      console.log(coffeeCart);

       RemplircoffeeCart();

       AddModal.close();
    }
  }
  console.log("ana " + newProduit);
 
})}



