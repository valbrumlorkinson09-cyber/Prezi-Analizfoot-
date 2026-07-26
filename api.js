// ===============================
// PREZI SCORE API FINAL
// ===============================

const API_KEY = "7172cfb71994762ee5e6b525ed41d571";

console.log("PREZI SCORE API KEY CHARGED");


const API_URL = "https://v3.football.api-sports.io/fixtures";



// ===============================
// LOAD MATCH JODI A
// ===============================

async function loadMatches(){

const box = document.getElementById("match-api");

if(!box){
    return;
}

box.innerHTML = "⏳ Chajman match yo...";


try{

const response = await fetch(
`${API_URL}?date=${new Date().toLocaleDateString("en-CA")}`,
{
method:"GET",
headers:{
"x-apisports-key":API_KEY
}
}
);


const data = await response.json();

console.log("REZILTA API MATCH:", data);


box.innerHTML = "";


if(!data.response || data.response.length === 0){

const next = await fetch(
`${API_URL}?next=10`,
{
headers:{
"x-apisports-key":API_KEY
}
}
);

const nextData = await next.json();


if(!nextData.response || nextData.response.length === 0){

box.innerHTML =
"⚽ Pa gen match disponib";

return;

}


box.innerHTML = "";


nextData.response.forEach(match=>{


box.innerHTML += `

<div class="match-item">

<h4>
🏆 ${match.league.name}
</h4>

<p>
⚪ ${match.teams.home.name}
</p>

<strong>
VS
</strong>

<p>
🔵 ${match.teams.away.name}
</p>

<p>
📅 ${match.fixture.date.substring(0,10)}
</p>

<button onclick="openMatch(
'${match.teams.home.name}',
'${match.teams.away.name}',
'0 - 0',
'${match.league.name}',
'--'
)">

📊 Analize Match

</button>

</div>

`;

});


return;

}



data.response.slice(0,10).forEach(match=>{


box.innerHTML += `

<div class="match-item">

<h4>
🏆 ${match.league.name}
</h4>

<p>
⚪ ${match.teams.home.name}
</p>

<strong>
${match.goals.home ?? 0} - ${match.goals.away ?? 0}
</strong>

<p>
🔵 ${match.teams.away.name}
</p>

<p>
⏱ ${match.fixture.status.elapsed ?? "--"}'
</p>

<button onclick="openMatch(
'${match.teams.home.name}',
'${match.teams.away.name}',
'${match.goals.home ?? 0} - ${match.goals.away ?? 0}',
'${match.league.name}',
'${match.fixture.status.elapsed ?? "--"}'
)">

📊 Analize Match

</button>


</div>

`;

});


}

catch(error){

console.log(error);

box.innerHTML =
"❌ Erè API Match";

}

}



// ===============================
// OPEN MATCH DETAILS
// ===============================


function openMatch(
home,
away,
score,
league,
minute
){


localStorage.setItem(
"homeTeam",
home
);


localStorage.setItem(
"awayTeam",
away
);


localStorage.setItem(
"matchScore",
score
);


localStorage.setItem(
"league",
league
);


localStorage.setItem(
"minute",
minute
);



window.location.href =
"match-details.html";


}




// ===============================
// LIVE MATCH
// ===============================


async function loadLive(){


const home =
document.getElementById("liveHome");


if(!home){

return;

}



try{


const response =
await fetch(
`${API_URL}?live=all`,
{

headers:{
"x-apisports-key":API_KEY
}

}
);



const data =
await response.json();



if(data.response.length > 0){


const match =
data.response[0];



document.getElementById("liveHome")
.innerHTML =
"⚪ "+
match.teams.home.name;



document.getElementById("liveAway")
.innerHTML =
"🔵 "+
match.teams.away.name;



document.getElementById("liveScore")
.innerHTML =
`${match.goals.home ?? 0} - ${match.goals.away ?? 0}`;



document.getElementById("liveMinute")
.innerHTML =
"⏱️ "+
(match.fixture.status.elapsed ?? 0)
+"'";



document.getElementById("liveStatus")
.innerHTML =
"🔴 LIVE";


}



}

catch(error){

console.log(error);

}


}



// START

loadMatches();

loadLive();
console.log("NOUVO API PREZI SCORE AKTIF");
