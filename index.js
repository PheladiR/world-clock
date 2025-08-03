// Johannesburg
function johannesburgTime() {
  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement){
    let dateElement = johannesburgElement.querySelector(".date");
  let timeElement = johannesburgElement.querySelector(".time");

  let currentTime = moment().tz("Africa/Johannesburg");
  let am_pm = currentTime.format("A");

  dateElement.innerHTML = currentTime.format("MMMM Do, YYYY");
  timeElement.innerHTML = `${currentTime.format(
    "hh:mm:ss"
  )} <small>${am_pm}</small>`;
  }
}
setInterval(johannesburgTime, 1000);

// Sydney
function sydneyTime() {
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement){
 let dateElement = sydneyElement.querySelector(".date");
  let timeElement = sydneyElement.querySelector(".time");

  let currentTime = moment().tz("Australia/Sydney");
  let am_pm = currentTime.format("A");

  dateElement.innerHTML = currentTime.format("MMMM Do, YYYY");
  timeElement.innerHTML = `${currentTime.format(
    "hh:mm:ss"
  )} <small>${am_pm}</small>`;
    }

    }
 
setInterval(sydneyTime, 1000);

// Update City on dropdown change

function updateCity(event) {
  let cityTimezone = event.target.value;
   if (cityTimezone === "current") {
     cityTimezone = moment.tz.guess();
   }
    let currentTime = moment().tz(cityTimezone);
    let am_pm = currentTime.format("A");
    let cityName = cityTimezone.replace("_", " ").split("/")[1];

    let cityDate = currentTime.format("MMMM Do, YYYY");
    let cityTime = `${currentTime.format("hh:mm:ss")} <small>${am_pm}</small>`;

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
   <div class="city d-flex justify-content-between">
       <div>
        <h2 class="cityName">${cityName}</h2>
        <div class="date  text-muted">${cityDate}</div>
      </div>
    <div class="time">${cityTime}</div>
    </div>
  `;
  
}


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
