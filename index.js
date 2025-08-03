//Johannesburg
function johannesburgTime (){
    let cityElement = document.querySelector("#Johannesburg");
    let dateElement = cityElement.querySelector(".date");
    let timeElement = cityElement.querySelector(".time");

    currentTime = moment();
    am_pm = currentTime.format("A");

    dateElement.innerHTML = currentTime
      .tz("Africa/Johannesburg")
      .format("MMMM Do, YYYY");
    timeElement.innerHTML = `${currentTime
      .tz("Africa/Johannesburg")
      .format("hh:mm:ss")} <small>${am_pm}</small>`;
};

setInterval(johannesburgTime, 1000)

//Sydney
function sydneyTime (){
    let cityElement = document.querySelector("#sydney");
    let dateElement = cityElement.querySelector(".date");
    let timeElement = cityElement.querySelector(".time");

    currentTime = moment();
    am_pm = currentTime.format("A");

    dateElement.innerHTML = currentTime
      .tz("Australia/Sydney")
      .format("MMMM Do, YYYY");
    timeElement.innerHTML = `${currentTime
      .tz("Australia/Sydney")
      .format("hh:mm:ss")} <small>${am_pm}</small>`;
};

setInterval(sydneyTime, 1000)
