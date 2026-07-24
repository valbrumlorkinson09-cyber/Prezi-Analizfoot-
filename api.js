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
