const search = document.querySelector("#search");
const city = document.querySelector("#inpcity");
const apikey = "2f7f72c4fef74579fb447fa030766c03";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkweather(cityin) {
    const response = await fetch(apiurl + `&q=${cityin}&appid=${apikey}`);
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}
const bti = 'bathinda';
document.addEventListener("DOMContentLoaded",function(){
    checkweather(bti);
})

search.addEventListener("click", function () {
    checkweather(city.value);
});


