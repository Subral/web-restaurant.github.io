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


document.getElementById('name').addEventListener('input', function () {
    const name = this.value;
    const nameError = document.getElementById('username_error');
    const namepattern = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    if (!namepattern.test(name) || name.length < 3) {
        nameError.textContent = 'Please enter a valid name.';
        this.classList.add('error');
    } else {
        nameError.textContent = '';
        this.classList.remove('error');
    }
});


document.getElementById('phone').addEventListener('input', function () {

    const phone = this.value;
    const phoneError = document.getElementById('phone_error');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number.';
        this.classList.add('error');
    } else {
        phoneError.textContent = '';
        this.classList.remove('error');
    }

});

document.getElementById('email').addEventListener('input', function () {
    const email = this.value;
    const emailError = document.getElementById('email_error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        this.classList.add('error');
    } else {
        emailError.textContent = '';
        this.classList.remove('error');
    }

});

document.getElementById('persons').addEventListener('change', function () {

    const persons = this.value;
    const personsError = document.getElementById('persons_error');
    if (!persons) {
        personsError.textContent = 'Please select the number of persons.';
        this.classList.add('error');
    } else {
        personsError.textContent = '';
        this.classList.remove('error');
    }
});

document.getElementById('date').addEventListener('input', function () {
    const date = this.value;
    const dateError = document.getElementById('date_error');
    const currentDate = new Date().toISOString().split('T')[0];

    if (!date || date < currentDate) {
        dateError.textContent = 'Please select a valid date.';
        this.classList.add('error');
    } else {
        dateError.textContent = '';
        this.classList.remove('error');
    }
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const persons = document.getElementById('persons').value;

    const namePattern = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const currentDate = new Date().toISOString().split('T')[0];
    if (!namePattern.test(name) || name.length < 3 ||
        !emailPattern.test(email) ||
        !phonePattern.test(phone) ||
        !persons ||
        !date || date < currentDate) {

        event.preventDefault();
        alert("Please enter valid credentials.");
    }
});
