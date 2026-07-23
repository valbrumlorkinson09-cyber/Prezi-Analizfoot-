// ===============================
// ANALIZFOOT PRO - API SYSTEM
// ===============================

const API_KEY = "METE_API_KEY_LA";

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
