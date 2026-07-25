const API_KEY = "17bb4ac5d7787d60de3ff0301ce0554b";

const matchBox = document.getElementById("match-api");

async function loadMatches(){

if(!matchBox){
return;
}

matchBox.innerHTML = "TEST API";


try{

const response = await fetch(
"https://v3.football.api-sports.io/fixtures?live=all",
{
method:"GET",
headers:{
"x-apisports-key": API_KEY
}
}
);


const data = await response.json();
console.log(data);
console.log("STATUS:", response.status);
matchBox.innerHTML="";


if(!data.response || data.response.length === 0){

matchBox.innerHTML = "⚠️ Pa gen match live kounya";

return;

}


data.response.forEach(match=>{


matchBox.innerHTML += `

<div class="match-item">

<h3>
⚽ ${match.league.name}
</h3>

<p>
${match.teams.home.name}
</p>

<strong>
${match.goals.home ?? 0} - ${match.goals.away ?? 0}
</strong>

<p>
${match.teams.away.name}
</p>

<p>
🕒 ${match.fixture.date}
</p>

<div class="button" onclick="location.href='match.html'">
📊 Analize Match
</div>

</div>

`;

});


}

catch(error){

matchBox.innerHTML =
"❌ Erè koneksyon API";

console.log(error);

}


}


loadMatches();
