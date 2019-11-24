//
//$(document).ready(function(){

//create weather button and on click run function. We need to create weather button in HTML.  
  //$('#checkWeather').click(function(){

//User will need to enter their tripLocation/destination which will be assigned an ID in HTML. 

//this is how the app will relay the destination information to the API
//var tripLocation = 'Miami';//changed to a variable to test and make an easier call
var tripLocation = "Nashville"; //changed to a variable to test and make an easier call

//if the user leaves destination area blank, the app needs to alert them that a tripLocation has to be entered. This API will recognize location by name instead of requiring Lat and Lon.
    if(tripLocation !== ''){

//my location API link goes here. 
      var APIKey = "f32ce10fcdmshf3587c309489b02p1c2f4ejsn5886632c5b19";//my Rapid API Key

// Here we are building the URL we need to query the database.This originally had the wrong end tag. Needed to add "?q=" ***research***
      var queryURL = "https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=" + tripLocation;``

// We then created an AJAX call
      $.ajax({
        url: queryURL,
        method: "GET",
        headers: { //had to add in headers to retrieve information. ***research***
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	        "x-rapidapi-key": APIKey
        }
      }).then(function(queryURL) {
        for (var i = 0; i < queryURL.list.length; i++){
        console.log(queryURL.list[i])
      }

      //var windEl = $('<div>').text(parseFloat(queryURL.city.list.deg));console.log("hope this worked" + windEl);
      //var humidityEl = $('<div>').text(response.main.humidity);
      //var tempEl = $('<div>').text(parseFloat(repsonse.main.temp - 273.15) * 1.8 + 32).toFixed(1);

        // Create CODE HERE to calculate the temperature (converted from Kelvin)
        //$('.temp').append(tempEl);
        // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
        // Create CODE HERE to dump the temperature content into HTML
       // $('body').text(JSON.stringify(response));

      })
    };


if (tripLocation !== "") {
  //my location API link goes here.
  var APIKey = "f32ce10fcdmshf3587c309489b02p1c2f4ejsn5886632c5b19"; 

  // Here we are building the URL we need to query the database.This originally had the wrong end tag. Needed to add "?q=" ***research***
  var queryURL =
    "https:community-open-weather-map.p.rapidapi.com/forecast/daily?q=" + tripLocation;

  // We then created an AJAX call
  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      //had to add in headers to retrieve information. ***research***
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": APIKey
    }
    //this for loop wil convert the needed information to just output the selected info needed to generate the 7 day forecast
      }).then(function(response) {
        for (var i = 0; i < response.list.length; i++) {
      console.log(response.list[i]); //returns 7 days of info
      //console.log('high: ', response.list[i].temp.max );//high temp kelvin
      //console.log('low: ', response.list[i].temp.min );//low temp kelvin
      console.log("weather: ", response.list[i].weather[0].description);
      var iconCode = response.list[i].weather[0].icon;
      var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
      //var tripLocation = $("<div>");
      //$("body").append(tripLocation);
      var hiTemp = parseInt((response.list[i].temp.max - 273.15) * 1.8 + 32); //convert from Kelvin to Fahrenheit
      console.log("hi", hiTemp);
      var loTemp = parseInt((response.list[i].temp.min - 273.15) * 1.8 + 32); //convert from Kelvin to Fahrenheit
      console.log("lo", loTemp);
      var temp = $("<div>");
      $("body").append(temp);
      temp.append("<h2> max:" + hiTemp + "</h2>");
      temp.append("<h2> min:" + loTemp + "</h2>");
      temp.append("<img src = " + iconUrl + ">");
    }
  });
} 