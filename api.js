// ===============================
// PREZI SCORE API FINAL
// ===============================

const API_KEY = "17bb4ac5d7787d60de3ff0301ce0554b";

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

console.log(data);


box.innerHTML = "";


if(!data.response || data.response.length === 0){

box.innerHTML =
`
<div class="news-card">

<h3>
⚽ Pa gen match jodi a
</h3>

<p>
🔥 Ap chèche match k ap vini yo...
</p>

</div>
`;

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
