// ===============================
// ANALIZFOOT PRO - API SYSTEM
// ===============================

const API_KEY =c07c38a93b2e98f06baf7069f3467119dbade3caa812e26ca81fd4b8468c7ab9

const API_URL = "https://v3.football.api-sports.io";

async function getMatches(){

try{

const response = await fetch(
API_URL + "/fixtures?date=2026-07-23",
{
headers:{
"x-apisports-key": API_KEY
}
}
);

const data = await response.json();

console.log(data);

}

catch(error){

console.log("Erè API:", error);

}

  }
async function montreMatch(){

try{

const response = await fetch(
API_URL + "/fixtures?date=2026-07-23",
{
headers:{
"x-apisports-key": API_KEY
}
}
);

const data = await response.json();

let matchBox = document.getElementById("match-api");

let matches = data.response;

if(matches.length === 0){

matchBox.innerHTML="❌ Pa gen match jodi a.";

return;

}


matchBox.innerHTML="";


matches.slice(0,5).forEach(match=>{

matchBox.innerHTML += `

<div class="match-item">

⚽ ${match.teams.home.name}

<b> VS </b>

${match.teams.away.name}

<br>

🕒 ${match.fixture.date}

</div>

<hr>

`;

});


}

catch(error){

document.getElementById("match-api").innerHTML=
"❌ Erè koneksyon API";

}

}


montreMatch();
