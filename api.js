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


<div class="button" onclick="analyzeMatch('${match.teams.home.name}','${match.teams.away.name}','${match.goals.home ?? 0}','${match.goals.away ?? 0}','${match.teams.home.id}','${match.teams.away.id}')">
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
async function getTeamForm(teamId){

try{

const response = await fetch(
`https://v3.football.api-sports.io/fixtures?team=${teamId}&last=5`,
{
method:"GET",
headers:{
"x-apisports-key": API_KEY
}
}
);

const data = await response.json();

let form = [];

data.response.forEach(match=>{

let isHome = match.teams.home.id == teamId;

let teamGoals = isHome ? match.goals.home : match.goals.away;
let opponentGoals = isHome ? match.goals.away : match.goals.home;


if(teamGoals > opponentGoals){

form.push("W");

}

else if(teamGoals < opponentGoals){

form.push("L");

}

else{

form.push("D");

}

});


return form.join(" ");

}

catch(error){

console.log(error);

return "N/A";

}

}
function analyzeMatch(home, away, homeScore, awayScore, homeId, awayId){

localStorage.setItem("homeTeam", home);

localStorage.setItem("awayTeam", away);

localStorage.setItem("homeScore", homeScore);

localStorage.setItem("awayScore", awayScore);

localStorage.setItem("homeId", homeId);

localStorage.setItem("awayId", awayId);

location.href="match.html";

}
async function loadLiveScore(){

const liveHome = document.getElementById("liveHome");

if(!liveHome){
return;
}


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


if(!data.response || data.response.length === 0){

document.getElementById("liveStatus").innerHTML =
"⚪ Pa gen match live kounya";

return;

}


let match = data.response[0];


document.getElementById("liveStatus").innerHTML =
"🔴 LIVE " + match.fixture.status.elapsed + "'";


document.getElementById("liveHome").innerHTML =
"⚪ " + match.teams.home.name;


document.getElementById("liveAway").innerHTML =
"🔵 " + match.teams.away.name;


document.getElementById("liveScore").innerHTML =
match.goals.home + " - " + match.goals.away;


document.getElementById("liveMinute").innerHTML =
"⏱ " + match.fixture.status.elapsed + "'";


}

catch(error){

console.log(error);

}

}


loadLiveScore();
