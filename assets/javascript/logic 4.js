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


$(document).on('click', '#searchButton', function(event){
    event.preventDefault()
    console.log('testing')
var searchLocation = $('#destination').val().trim()
var urlQuery = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-chloe&location=" + searchLocation + "";

$.ajax({
   url: urlQuery,
   type: 'GET',
   headers: {
    'Authorization':'Bearer 2y2kh_n1BP5rfEiJPqnQ2sui5rl8MYkZRNZUS5HrYTPLgPCmZeWpCsbWee2cOzJFoZWmf6J2Cg58nT2MQR8P69FD6BYFRtu08BhRXrcFT0U8jkDowHPmnUNPC686XXYx',
},
   method: 'GET',
   success: function(response){
       console.log(response);
   }
});

})