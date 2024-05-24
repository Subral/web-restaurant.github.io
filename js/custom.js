function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(26.712775, 80.005973),
        zoom: 10,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


function validateForm() {
            let valid = true;

            const name = document.getElementById('name').value.trim();
            const nameError = document.getElementById('username_error');
            const namepattern = /[a-zA-Z][a-zA-Z ]+/;
            if (!namepattern.test(name)) {
                nameError.textContent = 'Please enter a valid name.';
                valid = false;
            } else {
                nameError.textContent = '';
            }

            const phone = document.getElementById('phone').value.trim();
            const phoneError = document.getElementById('phone_error');
            const phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone)) {
                phoneError.textContent = 'Please enter a valid 10-digit phone number.';
                valid = false;
            } else {
                phoneError.textContent = '';
            }

            const email = document.getElementById('email').value.trim();
            const emailError = document.getElementById('email_error');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                emailError.textContent = 'Please enter a valid email address.';
                valid = false;
            } else {
                emailError.textContent = '';
            }

            const persons = document.getElementById('persons').value;
            const personsError = document.getElementById('persons_error');
            if (!persons) {
                personsError.textContent = 'Please select the number of persons.';
                valid = false;
            } else {
                personsError.textContent = '';
            }

            const date = document.getElementById('date').value;
            const dateError = document.getElementById('date_error');
            if (!date) {
                dateError.textContent = 'Please select a date.';
                valid = false;
            } else {
                dateError.textContent = '';
            }

            return valid;
        }