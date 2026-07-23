// ANALIZFOOT API SYSTEM


const matchesBox = document.getElementById("matches");


// Match demo pou teste sistèm nan

const demoMatches = [

{
home:"⚪ Real Madrid",
away:"🔵 Barcelona",
time:"20:00"
},


{
home:"🔴 Liverpool",
away:"🔵 Manchester City",
time:"18:30"
},


{
home:"🔵 PSG",
away:"⚪ Marseille",
time:"21:00"
}

];




// Afiche match yo

function loadMatches(){


if(!matchesBox){
    return;
}


matchesBox.innerHTML="";


demoMatches.forEach(function(match){


let box=document.createElement("div");


box.className="news";


box.innerHTML=`

<p>
⚽ ${match.home}
</p>

<p>
VS
</p>

<p>
${match.away}
</p>

<p>
🕒 ${match.time}
</p>

`;


matchesBox.appendChild(box);



});


}




// Lanse match yo

loadMatches();




// Fonksyon pou pita konekte API reyèl

async function getFootballData(){


console.log(
"Preparasyon koneksyon API ANALIZFOOT..."
);


}
