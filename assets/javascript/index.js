const guideList = document.querySelector('.guides');

// const loggedOutLinks = document.querySelector('.logout-out');
// const loggedInLinks = document.querySelector('.logout-in');




const setupUI = (user) => {


    if (user) {
        //toggle UI Elements
        $('.logged-in').show();
        $('.logged-out').hide();

        // console.log("Frank login in " + user)
    } else {
        //toggle UI Elements
        $('.logged-in').hide();
        $('.logged-out').show();
    }
}

// setup guides
const setupGuides = (data) => {

    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const guides = doc.data();
            console.log(guides);
            const li = `
            <li>
              <div class="collapsible-header grey lighten-4"> <p> <strong> Destination </strong> </p> </div>
              <div class="collapsible-header grey lighten-4">  ${guides.Destination} </div>
              <div class="collapsible-body white"> <p> <strong> Date </strong> </p> ${guides.DateofDeparture} </div>
              <div class="collapsible-body white"> <p> <strong> Number of Nights </strong> </p> ${guides.Nights} </div>
              <div class="collapsible-body white"> <p> <strong> Number of Adults </strong> </p> ${guides.Adult} </div>
              <div class="collapsible-body white"> <p> <strong> Number of Childrens
              </strong> </p> ${guides.Childrens} </div>

            </li>
          `;
            html += li;
        });
        guideList.innerHTML = html
    } else {
        guideList.innerHTML = '<h5 class="center-align">Login to view Travel Details</h5>';
    }

}

document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});