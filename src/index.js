import $ from 'jquery';

import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Hotel from '../src/Hotel';
// import Customer from '../src/Customer';
// import Booking from '../src/Booking';
// import RoomService from '../src/RoomService';

import rooms from '../src/data/roomsSampleData';
import bookings from '../src/data/bookingsSampleData'
import customers from '../src/data/customersSampleData';
import roomServices from '../src/data/roomServicesSampleData';

let hotel;
// let date = new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');

let date = '2019/08/02';

// let roomsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms');
// let bookingsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings');
// let roomServicesData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices');
// let customersData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users');

// Promise.all([roomsData, bookingsData, roomServicesData, customersData])
//     .then(responses => Promise.all(responses.map(response => response.json())))
//     .then(data => console.log(data))
//     .then(data => createHotel(data[0].rooms, data[1].bookings, data[2].roomServices, data[3].users, date))
//     .catch(error => console.log(error));


$(document).ready(() => {
  createHotel(rooms, bookings, roomServices, customers, date);
// $('.date-today').text(date);
//   hotel.calculateTotalRevenue(date);
//   hotel.calucuatePercentOccupancy(date);
//   hotel.returnTodaysBookings(date);
//   hotel.returnTodaysRoomServices(date);
//   hotel.caluculateNumRoomsAvailble(date);
})


function createHotel(rooms, bookings, roomServices, customers, date) {
  hotel = new Hotel(rooms, bookings, roomServices, customers, date);
  // invoke on load hotel methods
  $('.date-today').text(date);
  hotel.calculateTotalRevenue(date);
  hotel.calucuatePercentOccupancy(date);
  hotel.returnTodaysBookings(date);
  hotel.returnTodaysRoomServices(date);
  hotel.caluculateNumRoomsAvailble(date);
}


// $(document).ready(function () {
//   $('#tabs-container').tabs();
// });

