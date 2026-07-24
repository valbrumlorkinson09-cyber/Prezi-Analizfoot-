// ⚽ ANALIZFOOT APP SCRIPT


// Bouton Analiz

const buttons = document.querySelectorAll(".button");


buttons.forEach(function(btn){

btn.addEventListener("click",function(){

console.log("Analiz lanse...");

});

});




// 🔍 RECHÈCH FOOTBALL


const searchInput = document.querySelector(".search input");


if(searchInput){

searchInput.addEventListener("keyup",function(){


let value = searchInput.value.toLowerCase();


console.log(
"Rechèch:",
value
);


});

}




// 🤖 AI ANALIZ DEMO


function startAI(){


let result = document.getElementById("ai-result");


if(result){

result.innerHTML =
"🤖 AI ap analize match la...";

setTimeout(function(){


result.innerHTML =
"✅ Prediksyon fini: Real Madrid gen plis chans.";


},2000);


}


}





// ❤️ FAVORI MATCH


function favoriteMatch(){


alert(
"⭐ Match ajoute nan favori!"
);


}




// 🔔 NOTIFICATION


function notifyUser(){


alert(
"🔔 Ou pral resevwa nouvèl ANALIZFOOT."
);


}




// ANIMASYON KAT YO


const cards = document.querySelectorAll(".card");


cards.forEach(function(card){


card.addEventListener("click",function(){


card.style.transform="scale(1.02)";


setTimeout(function(){

card.style.transform="scale(1)";


},200);


});


});
