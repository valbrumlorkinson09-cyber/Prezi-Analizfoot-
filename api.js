const API_URL = "https://v3.football.api-sports.io";
const API_KEY = "METE_KLE_OU_LA";

async function montreMatch(){

let box = document.getElementById("match-api");

box.innerHTML = "🔄 Ap teste API...";

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

if(data.response){

box.innerHTML = "✅ API konekte";

}else{

box.innerHTML = "❌ API pa bay done";

}

}

catch(error){

console.log(error);

box.innerHTML = "❌ Erè koneksyon API";

}

}

montreMatch();
