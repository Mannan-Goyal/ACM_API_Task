sub = document.querySelector("#btn");
sub.addEventListener("click", ()=>{
    pincode = document.querySelector("#pincode").value;
    ccode = document.querySelector("#ccode").value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${pincode},${ccode}&appid=d0a994703b769265a1352a8b6bbde05d&units=metric`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('.result').innerHTML = `<div class="card">
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>${data.main.temp} °C</p>
            <p>${data.weather[0].description}</p>
            <p>Wind Speed: ${data.wind.speed}</p>
        </div>`
    })
});