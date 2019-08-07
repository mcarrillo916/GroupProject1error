// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAjYYOPwiKLCr_CdSjTIrAnQVcBGb0tj4w",
    authDomain: "project-travel-57f3b.firebaseapp.com",
    databaseURL: "https://project-travel-57f3b.firebaseio.com",
    projectId: "project-travel-57f3b",
    // storageBucket: "project-travel-57f3b.appspot.com",
    // messagingSenderId: "895341378789",
    appId: "1:895341378789:web:3f56e8050d91988a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

db.collection("guides").get().then(snapshot => {
    // console.log(snapshot.docs);
    // setupGuides(snapshot.docs);
})


// listen for auth status changes
auth.onAuthStateChanged(user => {
    // console.log(user);
    if (user) {
        console.log('User logged in: ');
        db.collection('guides').get().then(snapshot => {
            setupGuides(snapshot.docs);
            setupUI(user); //show botton 
        });
    } else {
        console.log('User logged out: ');
        setupUI(); //Hide button
        setupGuides([]);

    }
})

// to reset the detail modal 
const createTravel = document.querySelector('#create-form');

//create new Travel Detail 
$("#create-form").submit(function (event) {
    event.preventDefault();
    formTitle = $("#title").val();
    formDate = $("#travelDate").val();
    formNights = $("#numberOfNights").val();
    formAdults = $("#numberOfAdults").val();
    forChildrene = $("#numberOfChildren").val();

    db.collection('guides').add({
        Destination: formTitle,
        DateofDeparture: formDate,
        Nights: formNights,
        Adult: formAdults,
        Childrens: forChildrene

    }).then(() => {
        //close the modal and reset form 
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createTravel.reset();

    }).catch(err => {
        console.log(err.message)
    });
});




// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;



    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred.user);

        // close the signup modal & reset form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        // console.log("User signed out")

    })
});

// login user back in
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        // console.log("User login in")
        // close the signup modal & reset form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });

});