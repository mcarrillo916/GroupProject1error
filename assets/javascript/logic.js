$(document).ready(function () {
    $("#loginButton").on("click", function () {
        $("#loginPage").hide()
        $("#homePage").removeClass("hidden")
        document.body.style.background = "white";
        $(".parallax").parallax()
    })
    $(".sidenav").sidenav()
    $("#searchButton").on("click", function () {
        $(".searchHide").removeClass("searchHide")
    })
    $(".datepicker").datepicker({

    })
});