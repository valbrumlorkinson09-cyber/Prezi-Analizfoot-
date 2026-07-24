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
// 🤖 ANALIZ AI

function aiAnalyse(){

let result = document.getElementById("ai-result");


if(result){

result.innerHTML =
"🤖 AI ap analize match la...";


setTimeout(function(){


result.innerHTML =

"✅ Rezilta AI:<br><br>" +
"⚪ Real Madrid gen 55% chans viktwa.<br>" +
"🤝 Match nul: 25%<br>" +
"🔵 Barcelona: 20%";


},2000);


}

}
// PREMIUM SYSTEM

function activatePremium(){


localStorage.setItem("level","Premium");


document.getElementById("premium-message").innerHTML =
"👑 Felisitasyon! Kont ou vin Premium.";


}
// REGISTER

function registerUser(){

let username = document.getElementById("username").value;

let password = document.getElementById("password").value;


if(username==="" || password===""){

document.getElementById("message").innerHTML =
"❌ Ranpli tout chan yo.";

return;

}


localStorage.setItem("user", username);
localStorage.setItem("pass", password);

document.getElementById("message").innerHTML =
"✅ Kont kreye avèk siksè!";

}
function searchFootball(){

let text = document.getElementById("searchBox").value.toLowerCase();

let result = document.getElementById("search-result");


let teams = [
"real madrid",
"barcelona",
"manchester city",
"liverpool",
"psg"
];


let players = [
"kylian mbappe",
"vinicius jr",
"lamine yamal"
];


let all = teams.concat(players);


let found = all.filter(item => 
item.includes(text)
);



if(text === ""){

result.innerHTML="";

return;

}



if(found.length > 0){

result.innerHTML = 
"🔍 Rezilta:<br>" + found.join("<br>");

}

else{

result.innerHTML =
"❌ Pa jwenn rezilta";

}


}
function buyPremium(){

localStorage.setItem("level","Premium");

alert("🎉 Ou se Premium kounye a!");

location.href="profile.html";

}
