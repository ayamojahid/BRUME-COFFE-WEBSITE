
const optionsContainer =document.getElementById("options-container");

const PrixTotal = document.getElementById("prix-total");

const BoutonPanier =document.getElementById("ajouter-panier");

document.addEventListener("DOMContentLoaded" , Remplir);






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
    <span>${config.taille.l.name}</span>
    <span>Inclus</span>
</label>
<label class="carte" for="taille-m">
    <input type="radio" id="taille-m" name="taille"  value="${config.taille.m.price}" >
    <span>${config.taille.m.name}</span>
    <span>${config.taille.m.price}DH</span>
</label>
<label class="carte" for="taille-l">
    <input type="radio" id="taille-l" name="taille" value="${config.taille.l.price}">
    <span>${config.taille.s.name}</span>
    <span>${config.taille.s.price}DH</span>
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
    <input type="radio" id="lait-avoine" name="lait"   value="${config.lait.avoine.price}">
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
            <input type="checkbox" id="Caramel" name="supplements"   value="${config.supplements.caramel.price}">
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



}





















const config = {
  base: {
    espresso: { name: "Espresso", price: 20 },
    filtre: { name: "Filtre", price: 16 }
  },
  taille: {
    s: { name: "S · 150 ml", price: 4 },
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