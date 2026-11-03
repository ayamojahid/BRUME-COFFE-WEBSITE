const btnStep1 = document.querySelector("#Next1-Step1");
// console.log(btnStep1);

const Section1 = document.querySelector("#step-1")
const Section2 = document.querySelector("#step-2");
const Section3 = document.querySelector("#step-3");

const btnPrevious1 =document.querySelector("#Previous1");
const btnPrevious2 =document.querySelector("#Previous2");

const btnStep2 = document.querySelector("#Next-Step2");



console.log(btnStep2);

btnStep1.addEventListener("click" , ()=>{
   if(  validateStep1()  ) {
 Section1.hidden=true;
Section2.hidden=false; } })


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
    }
    else{
    nomInput.style.borderColor="red";
    mesagenom.textContent="Invalid";
 }
      if( prixValid ){
        prixInput.style.borderColor="green";
        mesagePrix.textContent="";  
    }
    else{
         prixInput.style.borderColor=" red";
         mesagePrix.textContent="Invalid"
    }

if( imageValid ) {
imageInput.style.borderColor="green";
mesageimage.textContent="" }
    else{
         imageInput.style.borderColor=" red";
         mesageimage.textContent="Invalid"
    }


let promotionValid = true;


if(checkPromos.checked) {

    if(pourcentageValid) {
      percentInput.style.borderColor="green";
      mesagepercentage.textContent="" 
    }
    else{
         percentInput.style.borderColor=" red";
         mesagepercentage.textContent="Invalid"
    }
    if(dateIsValid) {
   dateInput.style.borderColor="green";
      mesagedate.textContent="" ;
    }
    else{
           dateInput.style.borderColor=" red";
         mesagedate.textContent="Date Invalid"
    }
    promotionValid = pourcentageValid && dateIsValid;
}
   return nomValid && prixValid && imageValid &&  promotionValid ;
}




checkPromos.addEventListener("click" , ()=>{
detailsPromotion.classList.toggle("hidden");
})


function validateStep2() {
    
}


btnPrevious1.addEventListener("click" , ()=>{
Section2.hidden=true;
Section1.hidden=false; 
})

btnStep2.addEventListener("click" , ()=>{

Section2.hidden=true;
Section3.hidden=false; 
})

btnPrevious2.addEventListener("click" , ()=>{
Section2.hidden=false;
Section3.hidden=true; 
})