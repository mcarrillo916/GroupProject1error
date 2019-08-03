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
// This search variable is just to test that the search is working in the queryURL later this will be replaced by form values

$(document).on('click', '#searchButton', function (event) {
    event.preventDefault()
    var search = $('#destination').val().trim()



    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + search + "$categories=hotel"
    $.ajax({
        url: queryURL,
        headers: {
            'Authorization': 'Bearer 2y2kh_n1BP5rfEiJPqnQ2sui5rl8MYkZRNZUS5HrYTPLgPCmZeWpCsbWee2cOzJFoZWmf6J2Cg58nT2MQR8P69FD6BYFRtu08BhRXrcFT0U8jkDowHPmnUNPC686XXYx',
        },
        method: 'GET',
        success: function (response) {
            var results = response.businesses
            for (var i = 0; i < results.length; i++) {
                var hotelName = results[i].name
                var url = results[i].image_url
                var hotelAddress = results[i].location.address1
                var hotelDescriptionPrice = results[i].price
                var hotelDescriptionRating = results[i].rating

                //IMAGE
                var newImage = $("<img class='resize'>")
                // image
                newImage.append(`<img src=${url} + />`)
                var newImageDiv = $("<div class='class-image'>").append(`<img  class='resize' src=${url} />`)


                //CONTENT 
                var newContent = $("<span class='card-title activator grey-text text-darken-4'>" + hotelName + "<i class='material-icons right'>more_vert</i>")

                var newContentDiv = $("<div class='card-content'>").append(
                    newContent,
                )

                //REVEAL
                var newRevealParagraph = $("<p class='flow-text'>")
                newRevealParagraph.append("<br>" + hotelDescriptionPrice)
                newRevealParagraph.append("<br>" + hotelDescriptionRating)
                newRevealParagraph.append("<br>" + hotelAddress)
                var newReveal = $("<span class='card-title grey-text text-darken-4'>" + hotelName + "<i class='material-icons right'>close</i><br>").append(
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
                $("#hotelCardDiv").append(
                    newCard
                )
            }

        }
    });

})
