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


var hotelName = "Hotel Name"
var hotelDescription = "Hotel info goes here"
var hotelAddress = "Address goes here"

//CARD LOGIC
for (let i = 0; i < 9; i++) {

    var newCard = $("<div class='card'>").append(
        newImageDiv,
        newContentDiv,
        newRevealDiv,
        newSelector
    )

    //IMAGE
    var newImage = $("<img class='resize'>")
    newImage.attr("src", "assets/images/circles-and-roundabouts.png.png")
    var newImageDiv = $("<div class='class-image'>").append(
        newImage
    )


    //CONTENT
    var newContent = $("<span class='card-title activator grey-text text-darken-4'>" + hotelName + "<i class='material-icons right'>more_vert</i>")

    var newContentDiv = $("<div class='card-content'>").append(
        newContent,
    )

    //REVEAL
    var newRevealParagraph = $("<p class='flow-text'>")
    newRevealParagraph.append("<br>" + hotelDescription)
    var newReveal = $("<span class='card-title grey-text text-darken-4'>" + hotelName + "<i class='material-icons right'>close</i><br>").append(
        newRevealParagraph
    )
    var newRevealDiv = $("<div class='card-reveal'>").append(
        newReveal,
    )




    //SELECTOR
    var newSelectorInput = $("<input name='group1' class='selector' type='radio' value='unchecked'>")
    var newSelectorSpan = $("<span>")
    newSelectorSpan.text("Select")
    var newSelectorLabel = $("<label>").append(
        newSelectorInput,
        newSelectorSpan
    )
    var newSelector = $("<form action='#' class='center'><p>").append(
        newSelectorLabel
    )

    //APPEND
    $("#hotelCardDiv").append(
        newCard
    )
}

