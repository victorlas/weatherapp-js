const apiKey = "9d72636900ac3de82ef1fc60b4ccb49f";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`;

function myFunction() {
    let cidade = document.getElementById("search").value;
    const newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`;
  
    fetch(newUrl)
      .then(response => response.json())
      .then(data => {
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("sun").src = iconUrl
        console.log(data);
        console.log(data.main.temp -273 +"°");
        console.log(data.main.humidity +"%");
        console.log(data.main.feels_like)
        document.getElementById("temperatura").innerHTML = Math.trunc(data.main.temp - 273) + "°C"  
    document.getElementById("cidade").innerHTML = data.name  
    document.getElementById("descrição").innerHTML = data.weather[0].description
    document.getElementById("humity").innerHTML = "Humidity: " + data.main.humidity + "%"
    document.getElementById("feels").innerHTML = "Feel like: " + Math.trunc(data.main.feels_like - 273) + "°C"
    })

      .catch(error => console.log(error));
  }  
  