function updateTime() {
  // Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let dateElement = johannesburgElement.querySelector(".date");
    let timeElement = johannesburgElement.querySelector(".time");

    let currentTime = moment().tz("Africa/Johannesburg");
    let am_pm = currentTime.format("A");

    dateElement.innerHTML = currentTime.format("MMMM Do, YYYY");
    timeElement.innerHTML = `${currentTime.format(
      "hh:mm:ss"
    )} <small>${am_pm}</small>`;
  }

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
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

updateTime();
setInterval(updateTime, 1000); // update every second

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
    <div class="city d-flex justify-content-between fs-1">
      <div>
        <h2 class="cityName fs-2">${cityName}</h2>
        <div class="date text-muted fs-3">${cityDate}</div>
      </div>
      <div class="time fs-1">${cityTime}</div>
    </div>
    <a href="/" class="text-decoration-none text-black ms-3">All cities</a>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
