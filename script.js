

// //define the varibles that we'll need to append data pulled from api to cards above---------------------------------//
// var APIkey = "&appid=ecc0be5fd92206da3aa90cc41c13ca56";
// var cityName = "Seattle"
//var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=ecc0be5fd92206da3aa90cc41c13ca56";


//-----------------------Search Function for Current City Weather-----------------//

function searchCity(cityname) {

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=ecc0be5fd92206da3aa90cc41c13ca56";
var queryURLforcast = "https://api.openweathermap.org/data/2.5/forecast?q=Seattle&appid=ecc0be5fd92206da3aa90cc41c13ca56";

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

    $.ajax({
        url: queryURLforcast,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        console.log(queryURLforcast);
        // Storing an array of results in the results variable
        var results = response.list;
        //empty 5day div--------
        $("#5day").empty();
        //create HTML for 5day forcast...........................
        for (var i = 0; i < results.length; i + 3) {
        // Creating a div
        var fiveDayDiv = $("<div>");       
        //Storing the responses date 
        var date = results[i].dt_txt;
        //creating a header tag with the result items date
        var h5date = $("<h5>").text(date);
        //creating a p tag for the temp
        var pTemp = $("<p>");
        //Giving the p tag the temp pulled from the results
        pTemp.text(results[i].main.temp);
        //creating a p tag for the humidity
        var pHum = $("<p>");
        //Giving the p tag the humidity pulled from the results
        pHum.text(results[i].main.humidity);

        fiveDayDiv.append(pTemp);
        fiveDayDiv.append(pHum);
        
        $("#5day").prepend(fiveDayDiv);
        }

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

//create HTML for Tomorrow forcast...........................
        // var onedateEl = $('<h5>').text(repsonse.list[i].dt_txt);
        // var onetempEl = $('<h5>').text(repsonse.list[i].main.temp);
        // var onehumEl = $('<h5>').text(repsonse.list[i].main.humidity);
        // //create HTML for 2 days out forcast...........................
        // var twodateEl = $('<p>').text(repsonse.list[i].dt_txt);
        // var twotempEl = $('<p>').text(repsonse.list[i].main.temp);
        // var twohumEl = $('<p>').text(repsonse.list[i].main.humidity);
        // //create HTML for 3 days out forcast...........................
        // var threedateEl = $('<p>').text(repsonse.list[i].dt_txt);
        // var threetempEl = $('<p>').text(repsonse.list[i].main.temp);
        // var threehumEl = $('<p>').text(repsonse.list[i].main.humidity);
        // //create HTML for 4 days out forcast...........................
        // var fourdateEl = $('<p>').text(repsonse.list[i].dt_txt);
        // var fourtempEl = $('<p>').text(repsonse.list[i].main.temp);
        // var fourhumEl = $('<p>').text(repsonse.list[i].main.humidity);
        // //create HTML for 5 days out forcast...........................
        // var fivedateEl = $('<p>').text(repsonse.list[i].dt_txt);
        // var fivetempEl = $('<p>').text(repsonse.list[i].main.temp);
        // var fivehumEl = $('<p>').text(repsonse.list[i].main.humidity);
        // //create a new element to 
        // var newOneCardDiv = $('<div>');
        // var newTwoCardDiv = $('<div>');
        // var newThreeCardDiv = $('<div>');
        // var newFourCardDiv = $('<div>');
        // var newFiveCardDiv = $('<div>');
        // //appned 
        // newOneCardDiv.append(onedateEl.onetempEl.onehumEl);
        // newTwoCardDiv.append(twodateEl.twotempEl.twohumEl);
        // newThreeCardDiv.append(threedateEl.threetempEl.threehumEl);
        // newFourCardDiv.append(fourdateEl.fourtempEl.fourhumEl);
        // newFiveCardDiv.append(fivedateEl.fivetempEl.fivehumEl);

        // $('#5day').html(newOneCardDiv);
        // $('#5day').html(newThreeCardDiv);
        // $('#5day').html(newThreeCardDiv);
        // $('#5day').html(newFourCardDiv);
        // $('#5day').html(newFiveCardDiv);
