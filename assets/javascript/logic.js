$(document).ready(function () {

    // Initial Values 
    var destination = "";
    var dateOfDeparture = "";
    var dateOFReturn = "";
    var numberOfAdults = 0;
    var numberOfChildren = 0;

    var firebaseConfig = {
        apiKey: "AIzaSyAUvX0Qw0JJOZJkcqSyMJbJ2Maxz2HPDRc",
        authDomain: "team-projects-5939d.firebaseapp.com",
        databaseURL: "https://team-projects-5939d.firebaseio.com",
        projectId: "team-projects-5939d",
        storageBucket: "",
        messagingSenderId: "878504723535",
        appId: "1:878504723535:web:ff661e64a5ed4a64"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Create a variable to reference the database
    var database = firebase.database();


    //"Log in" Button Click, hides login div and shows mainpage div
    $("#loginButton").on("click", function () {
        $("#loginPage").hide()
        $("#homePage").removeClass("hidden")
        document.body.style.background = 'white';
        $(".parallax").parallax()
    })
    $(".sidenav").sidenav()
    $("#searchButton").on("click", function () {
        $(".searchHide").removeClass("searchHide")
    })
    $(".datepicker").datepicker({

    })
});


// this is whats going to grab the airplane quotes; give you the cheapest possible flight for the trip
// this date needs to be implemented with the calander in order to give you the accurate price
var date = '2019-11-20'
$.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/LAX-sky/' + date + '',
    method: 'GET',

    headers: {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "46d0add813msh1ed99ae9b7cfa4ap131f2bjsn919c66317030"
    },
    query: {
        "outboundpartialdate": "2019-12-01"
    },

}).then(function (response) {
    var quotes = response.Quotes
    for (var i = 0; i < quotes.length; i++) {
        console.log(quotes[i].MinPrice)
        console.log(response)
    }
})



$(document).on('click', '#searchButton', function (event) {
    event.preventDefault()
    var search = $('#destination').val().trim()

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + search + ""
    $.ajax({
        url: queryURL,
        headers: {
            'Authorization': 'Bearer 2y2kh_n1BP5rfEiJPqnQ2sui5rl8MYkZRNZUS5HrYTPLgPCmZeWpCsbWee2cOzJFoZWmf6J2Cg58nT2MQR8P69FD6BYFRtu08BhRXrcFT0U8jkDowHPmnUNPC686XXYx',
        },
        method: 'GET',
        success: function (response) {
            var results = response.businesses
            for (var i = 0; i < results.length; i++) {
                var foodState = results[i].location.state
                var foodName = results[i].name
                var url = results[i].image_url

                var foodAddress = results[i].location.address1
                var foodDescriptionPrice = results[i].price
                var foodDescriptionRating = results[i].rating
                var foodCity = results[i].location.city

                //IMAGE
                var newImage = $("<img class='resize'>")
                // image
                newImage.append(`<img src=${url} + />`)
                var newImageDiv = $("<div class='class-image'>").append(`<img  class='resize' src=${url} />`)
                var newContent = $("<span class='card-title activator grey-text text-darken-4'>" + foodName + "<i class='material-icons right'>more_vert</i>")
                var newContentDiv = $("<div class='card-content'>").append(
                    newContent,
                )

                //REVEAL
                var newRevealParagraph = $("<p class='flow-text center'>")
                newRevealParagraph.append("<br>" + foodDescriptionPrice)
                newRevealParagraph.append("<hr>" + foodDescriptionRating + " stars")
                newRevealParagraph.append("<hr>" + foodAddress)
                var newReveal = $("<span class='card-title grey-text text-darken-4 center'>" + foodName + "<i class='material-icons right'>close</i><br>").append(
                    newRevealParagraph
                )
                var newRevealDiv = $("<div class='card-reveal'>").append(
                    newReveal,
                )




                //SELECTOR
                var newSelectorInput = $("<input type='checkbox' value='unchecked'>")
                var newSelectorSpan = $("<span>")
                newSelectorSpan.text("Select")
                var newSelectorLabel = $("<label>").append(
                    newSelectorInput,
                    newSelectorSpan
                )
                var newSelector = $("<form action='#' class='center'><p>").append(
                    newSelectorLabel
                )
                var newCard = $("<div class='card'>").append(
                    newImageDiv,
                    newContentDiv,
                    newRevealDiv,
                    newSelector
                )
                //APPEND
                $("#foodCardDiv").append(
                    newCard
                )

            }
            var totalPrice = "$0"
            $("#priceResult").append(
                totalPrice
            )

        }
    })
})
