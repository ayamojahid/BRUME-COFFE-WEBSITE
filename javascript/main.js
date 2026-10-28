
const optionsContainer =document.getElementById("options-container");
const PrixTotal = document.getElementById("prix-total");
const BoutonPanier =document.getElementById("ajouter-panier");
const Section1 =document.querySelector(".section1");
const Section2 =document.querySelector(".section2");
const Section3 = document.getElementById("section3");

const Recup =document.querySelector(".recup");
Recup.addEventListener("click" , deleteContent );
const PanierChange = document.getElementById("panierChange");

document.addEventListener("DOMContentLoaded" , Remplir);
BoutonPanier.addEventListener("click" ,deleteContent);



function deleteContent() {
      if (reserve.length == 0 ) {
          alert("Votre panier est vide ! Veuillez remplir le panier.");
          return
    }
    
   Section1.style.display = "none";
    Section3.style.display = "block";
    Section2.style.display="none";
    rempliInfo();
}


function Remplir() {
       optionsContainer.innerHTML=`
    <div class="choises1">
    <div class="titre">
        <label>01 La base</label>
        <span>Choix unique</span>
    </div>
    <div class="options">
        <label class="carte" for="Espresso">
            <input  type="radio" id="Espresso" name="base"  value="${config.base.espresso.price}">
            <span>${config.base.espresso.name}</span>
            <span>${config.base.espresso.price}DH</span>
        </label>
        <label class="carte" for="Filtre">
            <input type="radio" id="Filtre" name="base" value="${config.base.filtre.price}" >
            <span>${config.base.filtre.name}</span>
            <span>${config.base.filtre.price}DH</span>
        </label>
    </div>
</div>

<div class="choix2">
    <div class="titre">
        <label>02 La taille</label>
        <span>Choix unique</span>
    </div>
    <div class="options">
       <label class="carte" for="taille-s">
    <input type="radio" id="taille-s" name="taille" value="${0}">
    <span>${config.taille.s.name}</span>
    <span>Inclus</span>
</label>
<label class="carte" for="taille-m">
    <input type="radio" id="taille-m" name="taille"  value="${config.taille.m.price}" >
    <span>${config.taille.m.name}</span>
    <span>${config.taille.m.price}DH</span>
</label>
<label class="carte" for="taille-l">
    <input type="radio" id="taille-l" name="taille" value="${config.taille.l.price}">
    <span>${config.taille.l.name}</span>
    <span>${config.taille.l.price}DH</span>
</label>
    </div>
</div>
<div class="choix3">
    <div class="titre">
        <label>03 Le lait</label>
        <span>Choix unique</span>
    </div>
    <div class="options">
        <label class="carte" for="lait-vache">
    <input type="radio" id="lait-vache" name="lait" value="${0}">
    <span>${config.lait.vache.name}</span>
    <span>Inclus</span>
        </label>
<label class="carte" for="lait-avoine">
    <input type="radio" id="lait-avoine" dataset="${config.lait.avoine.name}"   value="${config.lait.avoine.price}">
    <span>${config.lait.avoine.name}</span>
    <span>${config.lait.avoine.price}DH</span>
</label>
<label class="carte" for="lait-amande">
    <input type="radio" id="lait-amande" name="lait"   value="${config.lait.amande.price}">
    <span>${config.lait.amande.name}</span>
    <span>${config.lait.amande.price}DH</span>
</label>
    </div>
</div>
<div class="choix4">
    <div class="titre">
        <label>04 La touche en plus</label>
        <span>Plusieurs choix</span>
    </div>
    <div class="options">
        <label class="carte" for="Caramel">
            <input type="checkbox" id="Caramel" name=${config.supplements.caramel.name}   value="${config.supplements.caramel.price}">
            <span>${config.supplements.caramel.name}</span>
            <span>${config.supplements.caramel.price}DH</span>
        </label>
        <label class="carte" for="Vanille">
            <input type="checkbox" id="Vanille" name="supplements"  value="${config.supplements.vanille.price}">
            <span>${config.supplements.vanille.name}</span>
            <span>${config.supplements.vanille.price}DH</span>
        </label>
    </div>
</div>
    `;
const options = document.querySelectorAll("#options-container input");
options.forEach(function(opt) {
    opt.addEventListener("change" , CalculePrix);

})   }



const config = {
  base: {
    espresso: { name: "Espresso", price: 20  },
    filtre: { name: "Filtre", price: 16 }
  },
  taille: {
    s: { name: "S · 150 ml", price: 0 },
    m: { name: "M · 250 ml", price: 4 },
    l: { name: "L · 350 ml", price: 8 }
  },
  lait: {
    vache: { name: "Lait de vache", price: 0 },
    avoine: { name: "Lait d'avoine", price: 4 },
    amande: { name: "Lait d'amande", price: 5 }
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 }
  }
};

let nPanier=0;
PanierChange.textContent=` ${nPanier} `;
let reserve = [];
let totalPrix = 0;
function CalculePrix() {
   
     const choix = document.querySelectorAll("#options-container input:checked");
            nPanier=0
          totalPrix=0;
          reserve =[];
      choix.forEach(function(opt)  {
    const nom = opt.id;
    const categorie = opt.name;
    const prix = Number(opt.value);
  
        totalPrix+=prix;
        reserve.push(
            {
               categorie: categorie,
               nom: nom,
               prix: prix
            }
        )

        PrixTotal.textContent=totalPrix   + "DH";
        console.log(reserve);

        nPanier=1;
       PanierChange.textContent=` ${nPanier} `;
        
      
      }
    )
      
}

function rempliInfo() {
    const factureDetails =document.getElementById("facture-details");
    const totalFacture =document.getElementById("total-facture");
    
        factureDetails.innerHTML = "";
    reserve.forEach(function(opt) {
        factureDetails.innerHTML += `
         <div class="ligne-prix">  
         <span> ${opt.categorie}  . ${opt.nom}   </span>
         <span> ${opt.prix}  DH </span>
         </div>
         `;
       
    });
   
  
  totalFacture.textContent=totalPrix + " DH" ;
}



const btnPanier = document.getElementById("btn-panier");

btnPanier.addEventListener("click", function () {
  window.location.href = "/Pages/Checkout.html";
});