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

$(document).on('click', '#searchButton', function (event) {
    event.preventDefault()
    console.log($('#destination').val())
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
            for(var i = 0; i < results.length; i++){
                var names = results[i].name
                console.log(names)
            }

        }
    });

})

var hotelName = "Hotel Name"
var hotelDescription = "Hotel info goes here"
var hotelAddress = "Address goes here"

//append to cards
for (i = 0; i < 10; i++) {
    //Card Logic
    var newCard = $("<div class='card'>").append(
        newImageDiv,
        newContentDiv,
        newRevealDiv,
        newSelector
    )

    var newImageDiv = $("<div class='class-image'>").append(
        newImage
    )
    var newImage = $("<img class='resize'>")
    newImage.attr("src", "assets/images/circles-and-roundabouts.png.png")


    var newContentDiv = $("<div class='card-content'>").append(
        newContent,
    )
    var newContent = $("<span class='card-title activator grey-text text-darken-4'>" + hotelName + "<i class='material-icons right'>more_vert</i>")


    var newRevealDiv = $("<div class='card-reveal'>").append(
        newReveal,
    )
    var newReveal = $("<span class='card-title grey-text text-darken-4'>" + hotelName + "<i class='material-icons right'>close</i><br>").append(
        newRevealParagraph
    )
    var newRevealParagraph = $("<p class='flow-text'>")
    newRevealParagraph.append("<br>" + hotelDescription)


    var newSelector = $("<form action='#' class='center'><p>").append(
        newSelectorLabel
    )
    var newSelectorLabel = $("<label>").append(
        newSelectorInput,
        newSelectorSpan
    )
    var newSelectorInput = $("<input name='group1' class='selector' type='radio' value='unchecked'>")
    var newSelectorSpan = $("<span>")
    newSelectorSpan.text("Select")

    $("#hotelCardDiv").append(
        newCard
    )
}