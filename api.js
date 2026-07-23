alert("API.JS ap mache");
const API_URL = "https://v3.football.api-sports.io";
const API_KEY = "c07c38a93b2e98f06baf7069f3467119dbade3caa812e26ca81fd4b8468c7ab9";


async function montreMatch() {

    const box = document.getElementById("match-api");

    if (!box) return;

    box.innerHTML = "🔄 Ap chèche match yo...";


    try {

        const today = "2026-07-24";


        const response = await fetch(
            API_URL + "/fixtures?date=" + today,
            {
                headers:{
                    "x-apisports-key": API_KEY
                }
            }
        );


        const data = await response.json();

        console.log(data);


        if(data.response && data.response.length > 0){


            box.innerHTML = "";


            data.response.slice(0,5).forEach(match => {


                box.innerHTML += `

                <div class="match-item">

                ⚽ ${match.teams.home.name}

                <b> VS </b>

                ${match.teams.away.name}

                <br>

                🏆 ${match.league.name}

                <br>

                🕒 ${new Date(match.fixture.date).toLocaleTimeString()}

                </div>

                <hr>

                `;


            });


        }else{

            box.innerHTML = "❌ Pa gen match pou jodi a.";

        }


    }catch(error){

        console.error(error);

        box.innerHTML = "❌ Erè koneksyon API.";

    }

}


montreMatch();
