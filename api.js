const API_KEY = "17bb4ac5d7787d60de3ff0301ce0554b";

const matchBox = document.getElementById("match-api");

async function loadMatches() {

  if (!matchBox) return;

  matchBox.innerHTML = "⏳ Chajman match yo...";

  try {

    const response = await fetch(
      "https://v3.football.api-sports.io/fixtures?live=all",
      {
        method: "GET",
        headers: {
          "x-apisports-key": API_KEY
        }
      }
    );

    const data = await response.json();

    matchBox.innerHTML = "";

    if (!data.response || data.response.length === 0) {
      matchBox.innerHTML = "⚪ Pa gen match live kounya.";
      return;
    }

    data.response.forEach(match => {

      let minute = match.fixture.status.elapsed ?? "--";

      let scoreHome = match.goals.home ?? 0;
      let scoreAway = match.goals.away ?? 0;

      matchBox.innerHTML += `

<div class="match-item">

<h3>
🏆 ${match.league.name}
</h3>

<div class="teams">

<div class="team">

<img src="${match.teams.home.logo}" class="team-logo">

<p>${match.teams.home.name}</p>

</div>

<div class="score-box">

<strong>${scoreHome} - ${scoreAway}</strong>

<br>

<small>⏱ ${minute}'</small>

</div>

<div class="team">

<img src="${match.teams.away.logo}" class="team-logo">

<p>${match.teams.away.name}</p>

</div>

</div>
<button onclick="openMatch('${home}', '${away}', '${score}', '${league}', '${minute}')">
📊 Analize Match
</button>
<div class=
</div>

</div>

`;

    });

  } catch (error) {

    console.log(error);

    matchBox.innerHTML = "❌ Erè API.";

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

const isHome = match.teams.home.id == teamId;

const teamGoals = isHome ? match.goals.home : match.goals.away;
const opponentGoals = isHome ? match.goals.away : match.goals.home;

if(teamGoals > opponentGoals){

form.push("🟢 W");

}
else if(teamGoals < opponentGoals){

form.push("🔴 L");

}
else{

form.push("🟡 D");

}

});

return form.join(" ");

}

catch(error){

console.log(error);

return "N/A";

}

}


function analyzeMatch(home, away, homeScore, awayScore, homeId, awayId, fixtureId){

localStorage.setItem("homeTeam", home);
localStorage.setItem("awayTeam", away);

localStorage.setItem("homeScore", homeScore);
localStorage.setItem("awayScore", awayScore);

localStorage.setItem("homeId", homeId);
localStorage.setItem("awayId", awayId);

localStorage.setItem("fixtureId", fixtureId);

location.href = "match.html";

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
"x-apisports-key":API_KEY
}
}
);

const data = await response.json();

if(!data.response || data.response.length===0){

document.getElementById("liveStatus").innerHTML =
"⚪ Pa gen match live";

return;

}

const match = data.response[0];

document.getElementById("liveStatus").innerHTML =
"🔴 LIVE " + (match.fixture.status.elapsed ?? "--") + "'";

document.getElementById("liveHome").innerHTML =
"⚪ " + match.teams.home.name;

document.getElementById("liveAway").innerHTML =
"🔵 " + match.teams.away.name;

document.getElementById("liveScore").innerHTML =
(match.goals.home ?? 0) + " - " + (match.goals.away ?? 0);

const minute = document.getElementById("liveMinute");

if(minute){

minute.innerHTML =
"⏱ " + (match.fixture.status.elapsed ?? "--") + "'";

}

}catch(error){

console.log(error);

}

}

loadLiveScore();

/* Rafrechi chak 30 segonn */

setInterval(()=>{

loadMatches();

loadLiveScore();

},30000);
function openMatch(home, away, score, league, minute){

localStorage.setItem("homeTeam", home);
localStorage.setItem("awayTeam", away);
localStorage.setItem("score", score);
localStorage.setItem("league", league);
localStorage.setItem("minute", minute);


window.location.href = "match-details.html";

}
