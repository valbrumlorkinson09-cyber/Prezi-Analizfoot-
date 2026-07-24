const matchBox = document.getElementById("match-api");

const matches = [

{
home:"⚪ Real Madrid",
away:"🔵 Barcelona",
time:"20:00",
status:"🔴 Live",
score:"2 - 1"
},

{
home:"🔵 Manchester City",
away:"🔴 Liverpool",
time:"18:30",
status:"⏳ Pa kòmanse",
score:"-"
},

{
home:"🔴 PSG",
away:"⚪ Marseille",
time:"21:00",
status:"⏳ Pa kòmanse",
score:"-"
}

];



function loadMatches(){

if(!matchBox){
return;
}


matchBox.innerHTML="";


matches.forEach(match=>{


matchBox.innerHTML += `

<div class="match-item">


<h3>
${match.status}
</h3>


<p>
${match.home}
</p>


<strong>
${match.score}
</strong>


<p>
${match.away}
</p>


<p>
🕒 ${match.time}
</p>



<div class="button" onclick="location.href='match.html'">

📊 Analize Match

</div>


</div>

`;

});


}



loadMatches();
