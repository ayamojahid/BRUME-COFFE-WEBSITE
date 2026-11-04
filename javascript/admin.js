const btnStep1 = document.querySelector("#Next1-Step1");
// console.log(btnStep1);

const Section1 = document.querySelector("#step-1")
const Section2 = document.querySelector("#step-2");
const Section3 = document.querySelector("#step-3");

const btnPrevious1 =document.querySelector("#Previous1");
const btnPrevious2 =document.querySelector("#Previous2");

const btnStep2 = document.querySelector("#Next-Step2");

let Information=[];

let produit={ };

// console.log(btnStep2);
const progress2Number = document.getElementById("progress-2");
const line1 = document.getElementById("line-1")
btnStep1.addEventListener("click" , ()=>{
   if(  validateStep1()  ) {
    // Information.push(produit);
 Section1.hidden=true;
Section2.hidden=false; 
progress2Number.classList.add("Style-Number");
line1.classList.add("ligneBackground");
} 
else{
Swal.fire({
            icon: "error",
            title: "Formulaire Invalid",
            text: "Verifier les champs ",
        });
 }
 ;})


// LES inputs 
const nomInput = document.querySelector("#Nom");
const prixInput = document.querySelector("#Prix");
const imageInput = document.querySelector("#image");
const percentInput = document.querySelector("#pourcentage");
const dateInput = document.querySelector("#date");



const checkPromos = document.querySelector("#checkPromos");
const detailsPromotion =document.querySelector("#details-promotion");




function  validateStep1() {
const nomValid = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/.test(nomInput.value);
const prixValid = /^(?=.*[1-9])\d+(\.\d{1,2})?$/.test(prixInput.value);
const imageValid = /^https?:\/\/.+\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$/i.test(imageInput.value);
const pourcentageValid = /^(100|[1-9]?\d)(\.\d{1,2})?$/.test(percentInput.value);

const dateInputValid = new Date(dateInput.value);

const currentDate = new Date();

const dateIsValid = dateInput.value !== "" && dateInputValid > currentDate;
// console.log(currentDate);

const mesagenom = document.querySelector("#mesagenom");
const mesagePrix = document.querySelector("#mesageprix");
const mesageimage = document.querySelector("#mesageimage");
const mesagepercentage = document.querySelector("#mesagepercentage");
const mesagedate = document.querySelector("#mesagedate")

    if( nomValid ){
        nomInput.style.borderColor="green";
        mesagenom.textContent="";
        produit.Nom_Produit=nomInput.value;
    }
    else{
    nomInput.style.borderColor="red";
    mesagenom.textContent="Invalid";
 }
      if( prixValid ){
        prixInput.style.borderColor="green";
        mesagePrix.textContent="";  
        produit.Prix=prixInput.value;
    }
    else{
         prixInput.style.borderColor=" red";
         mesagePrix.textContent="Invalid"
    }

if( imageValid ) {
imageInput.style.borderColor="green";
mesageimage.textContent="" ;
produit.Image=imageInput.value;
}
    else{
         imageInput.style.borderColor=" red";
         mesageimage.textContent="Invalid"
    }


let promotionValid = true;


if(checkPromos.checked) {

    if(pourcentageValid) {
      percentInput.style.borderColor="green";
      mesagepercentage.textContent="" 
      produit.Pourcentage=percentInput.value;
    }
    else{
         percentInput.style.borderColor=" red";
         mesagepercentage.textContent="Invalid"
    }
    if(dateIsValid) {
   dateInput.style.borderColor="green";
      mesagedate.textContent="" ;
      produit.Date=dateInput.value;
    }
    else{
           dateInput.style.borderColor=" red";
         mesagedate.textContent="Date Invalid"
    }
    //  console.log("salam1" + promotionValid);
    //  console.log("percent" + pourcentageValid)
    //  console.log("date" + dateIsValid)

    promotionValid = pourcentageValid && dateIsValid;

    // console.log("salam2" + promotionValid);
   
    
}
// console.log(produit)

// console.log(Information)
   return nomValid && prixValid && imageValid &&  promotionValid ;
}




checkPromos.addEventListener("click" , ()=>{
detailsPromotion.classList.toggle("hidden");
})





const origineInput = document.querySelector("#origine");

// console.log(origineInput);

function validateStep2() {
// toutes les input de step 2 de validation
const temperatureInput = document.querySelector('input[name="temperature"]:checked');
const taillesInput = document.querySelectorAll('input[name="tailles"]:checked');
const laitInput = document.querySelectorAll('input[name="optionslait"]:checked');
const SupplementsInput = document.querySelectorAll('input[name="supplements"]:checked');

// les smals de mesage
const temperatureSmall =document.querySelector("#temperatureSmall");
const taillesSmall = document.querySelector("#taillesSmall");
const laitSmall = document.querySelector("#laitSmall")
const supplementsSmall = document.querySelector("#supplementsSmall");



// validation des input avec condiotion
const origineValid = origineInput.value !== "";

const temperatureValid = temperatureInput !== null;

// console.log(temperatureInput);

const taillesValid = taillesInput.length > 0;

const laitValid = laitInput.length > 0;

const supplementsValid = SupplementsInput.length > 0;

// console.log(temperatureValid)

  
if(origineValid){
    origineInput.style.borderColor="green";  
    produit.Origine=origineInput.value; 
    // console.log(produit)
}
else{
    origineInput.style.borderColor="red";
}

if (temperatureValid) {
    temperatureSmall.textContent="";
    // console.log("smiti " + temperatureInput.value);
    temperatureInput.style.borderColor="green";
    temperatureInput.style.outline="green";
    produit.Temperature=temperatureInput.value;
    // console.log(produit)
}
else{
   temperatureSmall.textContent="Veuiller choisir un Element";
   temperatureSmall.style.color="red";
   
}

if(taillesValid) {
taillesSmall.textContent="";
// console.log(taillesInput)


const  tabTailles=[];
taillesInput.forEach((opt)=>{
 // console.log(" me " + opt.value);
 tabTailles.push(opt.value);
produit.Tailles=tabTailles;
})
// console.log(tabTailles)
// console.log(produit)
}
else{
    taillesSmall.textContent="Veuiller choisir un Element";
   taillesSmall.style.color="red";
}


if(laitValid) {
    
laitSmall.textContent="";

const tabLait=[];
laitInput.forEach((opt)=>{

tabLait.push(opt.value);

// console.log(" me " + opt.value)
produit.Laits=tabLait;

// console.log(produit)
})

}
else{
   laitSmall.textContent="Veuiller choisir un Element";
   laitSmall.style.color="red";
}


if(supplementsValid) {
supplementsSmall.textContent="";

const tabSupplement=[];
SupplementsInput.forEach((opt)=>{
    tabSupplement.push(opt.value);
    produit.Supplements=tabSupplement;
    // console.log(produit);

})
}
else{
supplementsSmall.textContent="Veuiller choisir un Element";
   supplementsSmall.style.color="red";
}


return origineValid && temperatureValid && taillesValid && laitValid && supplementsValid;


}


btnPrevious1.addEventListener("click" , ()=>{
Section2.hidden=true;
Section1.hidden=false; 
progress2Number.classList.remove("Style-Number");
line1.classList.remove("ligneBackground");
})


const progress3Number=document.getElementById("progress-3");
const ligne2 = document.getElementById("line-2");

btnStep2.addEventListener("click" , ()=>{
if(validateStep2()) {
     Information.push(produit);
     console.log(produit)
    //  console.log(Information)
Section2.hidden=true;
Section3.hidden=false;
progress3Number.classList.add("Style-Number");
ligne2.classList.add("ligneBackground");


// produit.forEach((opt)=>{
//     console.log("hello")
//     const div = document.createElement("div");
//     const p = document.createElement("p");
//     p.textContent=opt.;
//     div.append(p);
//     console.log(opt)
// })
const carteProduit = document.getElementById("carte-produit");

carteProduit.innerHTML = "";

for(let key  in produit) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const small = document.createElement("small");
    
    p.textContent=`${key} : `;
    small.textContent=produit[key];
    div.append(p , small);
    
     div.append(p, small);

    carteProduit.append(div)
    div.classList.add("flex", "items-center", "gap-2");

    // console.log(key);
    // console.log(produit[key]);
}


 }

 else{
Swal.fire({
            icon: "error",
            title: "Formulaire Invalid",
            text: "Verifier les champs ",
        });
 }

 


})

btnPrevious2.addEventListener("click" , ()=>{
Section2.hidden=false;
Section3.hidden=true; 
progress3Number.classList.remove("Style-Number");
ligne2.classList.remove("ligneBackground");
})