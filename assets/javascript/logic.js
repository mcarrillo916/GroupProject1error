$(document).ready(function () {
    $("#homePage").hide()
    $("#loginButton").on("click", function () {
        $("#loginPage").hide()
        $("#homePage").show()
    })
    $(".sidenav").sidenav()
});