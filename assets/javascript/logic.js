$(document).ready(function () {
    $("#loginButton").on("click", function () {
        $("#loginPage").hide()
        $("#homePage").removeClass("hidden")
        document.body.style.backgroundImage = "url('../images/circles-and-roundabouts.png.pn')";
        $(".parallax").parallax()
    })
    $(".sidenav").sidenav()
    $("#searchButton").on("click", function () {
        $(".searchHide").removeClass("searchHide")
    })
    $(".datepicker").datepicker({

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



