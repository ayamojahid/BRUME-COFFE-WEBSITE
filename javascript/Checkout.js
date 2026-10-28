
const ProduitcoffeeCart = document.getElementById("ScoffeeCart");

let coffeeCart = [
  { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "../assets/images/caffeChek1.jpg" },
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
          <p>Prix : ${produit.price.toFixed(2)*produit.quantity}  DH </p>
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
}


// function diminuer(index) {
//   if (coffeeCart[index].quantity > 1) {
//     coffeeCart[index].quantity--;
//   }

//   RemplircoffeeCart();
// }


let price=0;
let tableInfo=[];

function ActiverBoutons() {
  const augmenteBtn = ProduitcoffeeCart.querySelectorAll(".plus");
  const diminueBtn = ProduitcoffeeCart.querySelectorAll(".moins");

  for (let i = 0; i < augmenteBtn.length; i++) {
    console.log(augmenteBtn.length)
    augmenteBtn[i].addEventListener("click", function () {
       coffeeCart[i].quantity++;
  RemplircoffeeCart();
      RemplircoffeeCart[i].produit.price;
    });
    
    diminueBtn[i].addEventListener("click", function () {
      if (coffeeCart[i].quantity > 1) {
    coffeeCart[i].quantity--;
      RemplircoffeeCart();
    RemplircoffeeCart[i].produit.price;
  }
      
    });
  }
}
RemplircoffeeCart();


function Calculer() {
for(let i = 0 ;  i <coffeeCart.length ; i++) {
  const stock = coffeeCart[i].price;
  console.log(stock)
}
}

// function augmenter(index) {
//   coffeeCart[index].quantity++;
//   RemplircoffeeCart();
//   console.log("salam")
// }


// function dumunier(index) {
//   if(coffeeCart[index].quantity > 1) {
//     coffeeCart[index].quantity--;
//   }
//   RemplircoffeeCart();
//    console.log("salam tani")
// }

// ProduitcoffeeCart.addEventListener("click" , function(event) {
// const produitElement =event.target.closest(".produit");
// console.log(produitElement);

// const boutonsPlus = event.target.closest(".plus");
// console.log(boutonsPlus);
// const boutonsMoins = event.target.closest(".moins");
// console.log(boutonsMoins);

//  const produits = ProduitcoffeeCart.querySelectorAll(".produit");
//   let index = -1;


// for(let i = 0 ; i<coffeeCart.length ; i++) {

//   for (let i = 0; i < produits.length; i++) {
//     if (produits[i] === produitElement) {
//       index = i;
//       break;
//     }
//   }

//   if(boutonsPlus) {
//    augmenter();
//   }
// }
// })





// function augmenter(index) {
//   coffeeCart[index].quantity++;
//   RemplircoffeeCart();
// }

// function diminuer(index) {
//   if (coffeeCart[index].quantity > 1) {
//     coffeeCart[index].quantity--;
//   }

//   RemplircoffeeCart();
// }

// // Event listener خارج RemplircoffeeCart()
// ProduitcoffeeCart.addEventListener("click", function (event) {
//   const produitElement = event.target.closest(".produit");

//   if (!produitElement) return;

//   const produits = ProduitcoffeeCart.querySelectorAll(".produit");
//   let index = -1;

//   for (let i = 0; i < produits.length; i++) {
//     if (produits[i] === produitElement) {
//       index = i;
//       break;
//     }
//   }

//   if (event.target.closest(".plus")) {
//     augmenter(index);
//   } else if (event.target.closest(".moins")) {
//     diminuer(index);
//   }
// });

// RemplircoffeeCart();
// // 4. Écouter les clics : en dehors de RemplircoffeeCart()
// // ProduitcoffeeCart.addEventListener("click", function (event) {
// //   const produitElement = event.target.closest(".produit");

// //   if (!produitElement) return;

// //   const boutonsPlus = event.target.closest(".plus");
// //   const boutonsMoins = event.target.closest(".moins");

// //   const index = Array.from(
// //     ProduitcoffeeCart.querySelectorAll(".produit")
// //   ).indexOf(produitElement);

// //   if (boutonsPlus) {
// //     augmenter(index);
// //   }

// //   if (boutonsMoins) {
// //     diminuer(index);
// //   }
// // });

// // // 5. Premier affichage
// // RemplircoffeeCart();





// // 1. Afficher les produits


// const coffeeProducts = [
//   { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
//   { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
//   { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
//   { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
//   { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
//   { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
//   { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
//   { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
//   { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
//   { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
// ];