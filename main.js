"use strict";

const MainCard = document.querySelector("#cartolina");
const descrizione = document.querySelector(".descrizione");

const TopBtn = document.querySelector(".go-top");
const DownBtn = document.querySelector(".go-down");

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


let nowImg = images[parseInt(variableSelector)]


MainCard.style.backgroundImage = `url('${nowImg["image"]}')`;
descrizione.innerHTML=(`<h5>${nowImg["title"]}</h5> 
                            <p> ${nowImg["text"]}</p>`);


TopBtn.addEventListener("click", function(){

    variableSelector -= 1;
    
    if (variableSelector < 0) {

        variableSelector = 4;
        
    }
    console.log(variableSelector);
    console.log(nowImg);
    
    nowImg = images[(variableSelector)]

    MainCard.style.backgroundImage = `url('${nowImg["image"]}')`;
    descrizione.innerHTML=(`<h5>${nowImg["title"]}</h5> 
                                <p> ${nowImg["text"]}</p>`)
})


DownBtn.addEventListener("click", function(){
    
    variableSelector += 1;

    if (variableSelector > 4) {

        variableSelector = 0;
    }
    console.log(variableSelector);
    console.log(nowImg);

    nowImg = images[(variableSelector)]

    MainCard.style.backgroundImage = `url('${nowImg["image"]}')`;
    
    descrizione.innerHTML=(`<h5>${nowImg["title"]}</h5> 
                                <p> ${nowImg["text"]}</p>`)
    
})







