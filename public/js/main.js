var obj;
const hamburger = document.getElementById("hamburger");
const linkName = document.getElementById("linkName");
const ulNav = document.getElementById("ulNav");
const searchBtn = document.getElementById("searchBtn");
const enterCity = document.getElementById("enterCity");
const weatherStatus = document.getElementById("weatherStatus");
const dayName = document.getElementById("dayName");
const dateName = document.getElementById("dateName");

hamburger.addEventListener("click", () => {
    ulNav.classList.toggle("show");
    linkName.classList.toggle("show");
});

const date = new Date();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
dayName.innerText = day[date.getDay()];
dateName.innerText = date.getDate() + "  " + month[date.getMonth()];


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal == "") {
        enterCity.innerText = "Please Enter City Name";
        weatherStatus.style.visibility = "hidden";
    } else {
        try {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=0ea272fdf6abfb2d313aed46e4aa955a&units=metric`)
                .then((response) => response.json())
                .then(data => obj = [data])
                .then(() => {
                    weatherStatus.innerHTML = `${obj[0].main.temp} <sup>o</sup>C  `;

                    tempStatus = obj[0].weather[0].main;
                    if (tempStatus == 'Sunny') {
                        weatherStatus.innerHTML += "<i class='fa-solid fa-sun tempimg' style='color:#eccc68'></i>"
                    }
                    else if (tempStatus == 'Clouds') {
                        weatherStatus.innerHTML += "<i class='fa-solid fa-cloud tempimg' style='color:#fff'></i>"
                    }
                    else if (tempStatus == 'Rainy') {
                        weatherStatus.innerHTML += "<i class='fa-solid fa-cloud-rain tempimg' style='color:#5353ec'></i>"
                    }
                    else {
                        weatherStatus.innerHTML += "<i class='fa-solid fa-cloud tempimg' style='color:#eccc68'></i>"
                    }
                    enterCity.innerText = `${obj[0].name} , ${obj[0].sys.country}`
                    weatherStatus.style.visibility = "visible";
                });

        }
        catch(err){
                enterCity.innerText = "Please Enter Correct City Name";
                weatherStatus.style.visibility = "hidden";
                console.clear();

        }

    }
}

searchBtn.addEventListener("click", getInfo);




