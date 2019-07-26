import $ from 'jquery';

import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let hotel;
let date = new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');


// fetch - explore options for fetching 4 data sets
// Promise.all???

  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')
    
    .then(response => response.jason())

$('.date-today').text(`Today is ${month} ${day} ${year}`);

