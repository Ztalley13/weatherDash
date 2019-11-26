document.getElementById("citySearch").addEventListener("click", function () {
    weather();
  })
  function weather() {
    var city = document.getElementById("search").value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=82e0e6ab873a6ac39caada2c8b0fafd5"
    axios.get(url).then(function (response) {
  
      var icon = response.data.weather[0].icon;
      document.getElementById("icon").setAttribute("src", "http://openweathermap.org/img/wn/" + icon + ".png")
      console.log(document.getElementById("icon"));
      let theDate = new Date(response.data.dt * 1000).toLocaleDateString().split(",")[0];
      var town = response.data.name;
      document.getElementById("city").innerHTML = town + " (" + theDate + ")";
  
      var temp = response.data.main.temp;
      document.getElementById("temp").innerHTML = "Temperature: " + temp + "F";
      var humidity = response.data.main.humidity;
      document.getElementById("humidity").innerHTML = "humidity: " + humidity + "%";
      var windSpeed = response.data.wind.speed;
      document.getElementById("wind").innerHTML = "Wind Speed: " + windSpeed + "MPH";
      var lat = response.data.coord.lat;
      var lon = response.data.coord.lon;
      var uvIndexurl = "https://api.openweathermap.org/data/2.5/uvi?appid=82e0e6ab873a6ac39caada2c8b0fafd5&lat=" + lat + "&lon=" + lon;
      axios.get(uvIndexurl).then(function (responseUv) {
        document.getElementById("uv").innerHTML = "UV index: " + responseUv.data.value;
        var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=82e0e6ab873a6ac39caada2c8b0fafd5&lat=" + lat + "&lon=" + lon + "&units=imperial&";
        axios.get(fiveDayUrl).then(function (responseFive) {
  
          let date1 = new Date(responseFive.data.list[2].dt * 1000).toLocaleDateString().split(",")[0];
          document.getElementById("date1").innerHTML = date1
          var icon1 = responseFive.data.list[2].weather[0].icon;
          document.getElementById("icon1").setAttribute("src", "http://openweathermap.org/img/wn/" + icon1 + ".png");
          var temp1 = responseFive.data.list[2].main.temp;
          document.getElementById("temp1").innerHTML = "Temp: " + temp1 + "F";
          var humidity1 = responseFive.data.list[2].main.humidity;
          document.getElementById("humid1").innerHTML = "Humidity: " + humidity1 + "%";
  
          let date2 = new Date(responseFive.data.list[10].dt * 1000).toLocaleDateString().split(",")[0];
          document.getElementById("date2").innerHTML = date2
          var icon2 = responseFive.data.list[10].weather[0].icon;
          document.getElementById("icon2").setAttribute("src", "http://openweathermap.org/img/wn/" + icon2 + ".png");
          var temp2 = responseFive.data.list[10].main.temp;
          document.getElementById("temp2").innerHTML = "Temp: " + temp2 + "F";
          var humidity2 = responseFive.data.list[10].main.humidity;
          document.getElementById("humid2").innerHTML = "Humidity: " + humidity2 + "%";
  
          let date3 = new Date(responseFive.data.list[18].dt * 1000).toLocaleDateString().split(",")[0];
          document.getElementById("date3").innerHTML = date3
          var icon3 = responseFive.data.list[18].weather[0].icon;
          document.getElementById("icon3").setAttribute("src", "http://openweathermap.org/img/wn/" + icon3 + ".png");
          var temp3 = responseFive.data.list[18].main.temp;
          document.getElementById("temp3").innerHTML = "Temp: " + temp3 + "F";
          var humidity3 = responseFive.data.list[18].main.humidity;
          document.getElementById("humid3").innerHTML = "Humidity: " + humidity3 + "%";
  
          let date4 = new Date(responseFive.data.list[26].dt * 1000).toLocaleDateString().split(",")[0];
          document.getElementById("date4").innerHTML = date4
          var icon4 = responseFive.data.list[26].weather[0].icon;
          document.getElementById("icon4").setAttribute("src", "http://openweathermap.org/img/wn/" + icon4 + ".png");
          var temp4 = responseFive.data.list[26].main.temp;
          document.getElementById("temp4").innerHTML = "Temp: " + temp4 + "F";
          var humidity4 = responseFive.data.list[26].main.humidity;
          document.getElementById("humid4").innerHTML = "Humidity: " + humidity4 + "%";
  
          let date5 = new Date(responseFive.data.list[34].dt * 1000).toLocaleDateString().split(",")[0];
          document.getElementById("date5").innerHTML = date5
          var icon5 = responseFive.data.list[34].weather[0].icon;
          document.getElementById("icon5").setAttribute("src", "http://openweathermap.org/img/wn/" + icon5 + ".png");
          var temp5 = responseFive.data.list[34].main.temp;
          document.getElementById("temp5").innerHTML = "Temp: " + temp5 + "F";
          var humidity5 = responseFive.data.list[34].main.humidity;
          document.getElementById("humid5").innerHTML = "Humidity: " + humidity5 + "%";
  
  
        })
      })
      //search history with city name (local storage)
      function storage(storageItem) {
        if (localStorage.weather) {
            recentArray = JSON.parse(localStorage.weather);
        }
        if (recentArray.indexOf(storageItem) === -1 ) {
            recentArray.push(storageItem);
            localStorage.setItem('weather', JSON.stringify(recentArray));
        } else ('already in array')
    }
    function clearHistory() {
        weatherStorage = JSON.parse(localStorage.weather);
        recentArray = [];
        localStorage.setItem('weather', JSON.stringify(recentArray));
        populateHistory();
    }
    function populateHistory() {
        recentUl.html('');
        if(localStorage.weather) {
            weatherStorage = JSON.parse(localStorage.weather);
            weatherStorage.forEach( function(item) {
                recentUl.prepend($('<div>').attr('class', 'input-group-append').text(item));
            });
        }
    }
      // clicking on the city name gets current and future data 
      //5 day forcast under current weather with:
      //* Date
      //* Icon image (visual representation of weather conditions)
      //* Temperature
      //Humidity
    })
  }
