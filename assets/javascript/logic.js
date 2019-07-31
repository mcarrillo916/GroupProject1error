$(document).ready(function () {

    //"Log in" Button Click, hides login div and shows mainpage div
    $("#loginButton").on("click", function () {
        $("#loginPage").hide()
        $("#homePage").removeClass("hidden")
        $("#footer").removeClass("hidden")
        document.body.style.background = "white";
        $(".parallax").parallax()
    })

    //functionality for navbar phone menu + parallax + datepickers
    $(".sidenav").sidenav()
    $(".datepicker").datepicker({
    })

    //Search Button Click, shows results div
    $("#searchButton").on("click", function () {
        $(".searchHide").removeClass("searchHide")
    })
});
// This search variable is just to test that the search is working in the queryURL later this will be replaced by form values
var search = 'Fairfield California'
var queryURL = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + search + '&inputtype=textquery&fields=formatted_address,geometry,name&key=AIzaSyAkY4dt1u2LMdMnJbRKOJIul5zLLszsC7c'

$.ajax({
    url: queryURL,
    type: 'GET'
}).then(function (response) {
    data = (JSON.stringify(response))
    console.log(data)
})



