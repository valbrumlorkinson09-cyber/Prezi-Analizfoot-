console.log("ANALIZFOOT lanse...");


// BOUTON KÒMANSE ANALIZ

const startButton = document.querySelector(".hero button");

if(startButton){

startButton.addEventListener("click", function(){

alert("🤖 AI ANALIZ ap prepare...");

});

}




// RECHÈCH EKIP / JWÈ

const searchInput = document.querySelector(".search input");


if(searchInput){

searchInput.addEventListener("keyup", function(){

let text = searchInput.value.toLowerCase();


if(text.length > 0){

console.log("Rechèch:", text);

}

});

}




// AI ANALIZ

function nouvoAnaliz(){

let rezilta = document.getElementById("ai-result");


if(rezilta){

rezilta.innerHTML =
"🤖 Nouvo analiz AI pare!";

}

}




// SIMILASYON MATCH LIVE

let minute = 67;


setInterval(function(){


let liveTime = document.querySelector(".score span");


if(liveTime){

minute++;

liveTime.innerHTML = "⏱ " + minute + "'";

}


},60000);





// ANIMASYON SOU KAT YO

const cards = document.querySelectorAll(".card");


cards.forEach(function(card){


card.addEventListener("click",function(){


card.style.transform="scale(1.02)";


setTimeout(function(){

card.style.transform="scale(1)";

},200);


});


});
