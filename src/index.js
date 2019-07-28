import $ from 'jquery';

import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let hotel;
let date = new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');


// fetch - explore options for fetching 4 data sets
// Promise.all???

let customersData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
let roomsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
let bookingsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
let roomServicesData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')

Promise.all([customersData], [roomsData], [bookingsData], [roomServicesData]).map()

    
    .then(response => response.jason())

$('.date-today').text(`Today is ${month} ${day} ${year}`);

