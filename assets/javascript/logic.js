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
        $("#footer").removeClass("hidden")
        document.body.style.background = "white";
        $(".parallax").parallax()
    })

    //functionality for navbar phone menu + parallax + datepickers
    $(".sidenav").sidenav()
    $(".datepicker").datepicker({})

    //Search Button Click, shows results div
    $("#searchButton").on("click", function () {
        $(".searchHide").removeClass("searchHide")

        var destination = $("#destination").val().trim();
        var dateOfDeparture = $("#dateOfDeparture").val().trim();
        var dateOFReturn = $("#dateOFReturn").val().trim();
        var numberOfAdults = $("#numberOfAdults").val().trim();
        var numberOfChildren = $("#numberOfChildren").val().trim();


        // Don't refresh the page!
        event.preventDefault();

        // form validation - if empty - alert
        if (destination.length === 0 ||
            dateOfDeparture.length === 0 ||
            dateOFReturn.length === 0 ||
            numberOfAdults.length === 0 ||
            numberOfChildren.length === 0) {

            alert("Please Fill All Required Fields");

        } else {

            database.ref("/project1").push({
                destination: destination,
                dateofDeparture: dateOfDeparture,
                dateofReturn: dateOFReturn,
                numberofAdults: numberOfAdults,
                numberofChildren: numberOfChildren

            });

            //Clear Trip entry Values

            $("#destination").val('');
            $("#dateOfDeparture").val('');
            $("#dateOFReturn").val('');
            $("#numberOfAdults").val('');
            $("#numberOfChildren").val('');

        }

    });

    database.ref("/project1").on("child_added", function (snapshot) {

        console.log("Project data " + snapshot.val().destination);
        console.log("date of departure test" + snapshot.val().dateofDeparture);

        //Add data to the table
        var tr = $("<tr>");
        tr.append(
            $("<td class='center'>").text(snapshot.val().destination),
            $("<td class='center'>").text(snapshot.val().dateofDeparture)
        );

        $("#tripTableData").append(tr);

        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });


    // This search variable is just to test that the search is working in the queryURL later this will be replaced by form values
    var search = 'Fairfield California'
    var queryURL = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + search + '&inputtype=textquery&fields=formatted_address,geometry,name&key=AIzaSyAkY4dt1u2LMdMnJbRKOJIul5zLLszsC7c'

    $.ajax({
        url: queryURL,
        type: 'GET'
    }).then(function (response) {
        data = (JSON.stringify(response))
        console.log(response)
        console.log(data)


    })


});