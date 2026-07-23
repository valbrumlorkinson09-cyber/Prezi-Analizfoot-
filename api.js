const API_URL = "https://v3.football.api-sports.io";
alert("API JS CHARGE");
const API_KEY = "c07c38a93b2e98f06baf7069f3467119dbade3caa812e26ca81fd4b8468c7ab9

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

box.innerHTML = "❌ Erè koneksyon API";

}

console.log(error);

box.innerHTML = "❌ Erè koneksyon API";

}

}

montreMatch();
