

// //define the varibles that we'll need to append data pulled from api to cards above---------------------------------//
// var APIkey = "&appid=ecc0be5fd92206da3aa90cc41c13ca56";
// var cityName = "Seattle"
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=ecc0be5fd92206da3aa90cc41c13ca56";


//-----------------------Search Function for Current City Weather-----------------//

function searchCity(cityname) {

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=ecc0be5fd92206da3aa90cc41c13ca56";

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    console.log(response);
    console.log(queryURL);
    //empty divs and ids that we need to dump content into
    $("#current").empty();

    // $('#UV').empty();
    
    //create HTML for city information......
    var cityNameEl = $("<h2>").text(response.name);
    var tempEL = $("<p>").text(response.main.temp);
    var humEl = $("<p>").text(response.main.humidity);
    //create HTML div to append new elements to render on page....
    var newDiv = $('<div>');

    newDiv.append(cityNameEl, tempEL, humEl);

    $("#current").html(newDiv);

});



}


//------------------------Event handler for user city search-----------------------//


$("#select-city").on("click", function(event) {
// Preventing the button from trying to submit the form
    event.preventDefault();
// Storing the city name
    var cityInput = $("#city-input").val().trim();

//save search term to local storage.....
 var textContent = $(this)
 .siblings("input")
 .val();
localStorage.setItem(cityInput, textContent);

 // Running the searchCity function (passing in the city as an argument) 
 searchCity(cityInput);
});
console.log(event);



//current --
// name date icon
// Temp
// humidity 
//wind speed
// UV

//5 day ---
//date:
//icon
//Temp:
//humidity: