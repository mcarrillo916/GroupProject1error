$(document).ready(function () {

    //"Log in" Button Click, hides login div and shows mainpage div
    $("#loginButton").on("click", function () {
        $("#loginPage").hide()
        $("#homePage").removeClass("hidden")
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