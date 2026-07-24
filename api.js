alert("API mache");
// ⚽ ANALIZFOOT API SYSTEM


const matchContainer = document.querySelector("#match-api");


// Match demo (baz pou API reyèl pita)

const matches = [

{
home:"⚪ Real Madrid",
away:"🔵 Barcelona",
time:"20:00",
status:"Jodi a"
},

{
home:"🔵 Manchester City",
away:"🔴 Liverpool",
time:"18:30",
status:"Jodi a"
},

{
home:"🔵 PSG",
away:"⚪ Marseille",
time:"21:00",
status:"Jodi a"
}

];




// Afiche match yo

function displayMatches(){


if(!matchContainer){
    return;
}


matchContainer.innerHTML="";


matches.forEach(function(match){


let card = document.createElement("div");


card.className="match-item";


card.innerHTML = `

⚽ ${match.home}

<br>

🆚

<br>

${match.away}

<br>

🕒 ${match.time}

<br>

📅 ${match.status}

`;



matchContainer.appendChild(card);



});


}




// Lanse sistèm nan

displayMatches();




// Fonksyon API reyèl pita

async function getLiveMatches(){


console.log(
"🔄 ANALIZFOOT ap chèche match yo..."
);


}
const matchBox = document.getElementById("match-api");


const matches = [

{
home:"⚪ Real Madrid",
away:"🔵 Barcelona",
time:"20:00"
},

{
home:"🔵 Manchester City",
away:"🔴 Liverpool",
time:"18:30"
},

{
home:"🔴 PSG",
away:"⚪ Marseille",
time:"21:00"
}

];


function loadMatches(){

if(!matchBox){
return;
}


matchBox.innerHTML="";


matches.forEach(match => {


matchBox.innerHTML += `

<div class="match-item">

⚽ ${match.home}

<br>

🆚

<br>

${match.away}

<br>

🕒 ${match.time}

</div>

`;

});


}


loadMatches();
