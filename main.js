"use strict";

const MainCard = document.querySelector("#cartolina");
const descrizione = document.querySelector(".descrizione");
const rightSelector = document.querySelector(".right-selector");

const TopBtn = document.querySelector(".go-top");
const DownBtn = document.querySelector(".go-down");

let contatore = 0;
let variableSelector = 0;

const images = [
    {
        image: 'imgs/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'imgs/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'imgs/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'imgs/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'imgs/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//creazione singoli elementi lista destra +append

images.forEach((singolaIMG) => {
    const div = document.createElement("div");
    contatore ++;
    console.log(`${singolaIMG.title}`, `${singolaIMG.image}`);
    div.style.backgroundImage = `url('${singolaIMG["image"]}')`;
    div.classList.add("selettore");
    div.addEventListener("click", casellaClick);
    div.dataset.numero = parseInt(contatore - 1);
    console.log(contatore);
    rightSelector.append(div);
    

});


//variabile card attuale

let nowImg = images[parseInt(variableSelector)]

nowImg = printHtml();



//bottone img sopra


TopBtn.addEventListener("click", function () {

    variableSelector --;

    if (variableSelector < 0) {

        variableSelector = 4;

    }
    console.log(variableSelector);


    nowImg = printHtml();
})


//bottone img sotto


DownBtn.addEventListener("click", function () {

    variableSelector ++;

    if (variableSelector > 4) {

        variableSelector = 0;

    }
    console.log(variableSelector);



    printHtml();
})


//funzione click barra destra


function casellaClick() {

    variableSelector = this.dataset.numero;

    printHtml();

    console.log(variableSelector);

}


// Funzione stampa su HTML

function printHtml(){
    nowImg = images[(variableSelector)]
    console.log(nowImg);
    MainCard.style.backgroundImage = `url('${nowImg["image"]}')`;
    descrizione.innerHTML = (`<h5>${nowImg["title"]}</h5> 
                                <p> ${nowImg["text"]}</p>`)
}



setInterval(function(){
    variableSelector++;

    if (variableSelector > 4){
        variableSelector = 0;
    }
    printHtml();
    console.log (variableSelector);

  }, 4500);

  const imageList = document.querySelectorAll( ".right-selector" );
  imageList[variableSelector].classList.add("active");

 
