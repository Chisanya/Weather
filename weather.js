const apiKey = "15f5f3a9939a2b3e816a49b0a7b52e31";
//const weatherURL = `http://api.openweathermap.org/geo/1.0/direct?q=Aba&limit=5&appid=${apiKey}`;
const secondWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Aba&appid=${apiKey}`;

fetch(secondWeatherURL).then(
    (response)=>{
        response.json
    }
).then(
    (data)=>{
        console.log(data);
    }
).catch(
    (error)=>{
        console.log(error);

    }
)
