import $ from 'jquery';

import './css/base.scss';

import Hotel from '../src/Hotel';
import domUpdates from "../src/domUpdates";
// import Customer from '../src/Customer';
// import Booking from '../src/Booking';
// import RoomService from '../src/RoomService';


let hotel;
let date = new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');

let roomsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms');
let bookingsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings');
let roomServicesData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices');
let customersData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users');

Promise.all([roomsData, bookingsData, roomServicesData, customersData])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => createHotel(data[0].rooms, data[1].bookings, data[2].roomServices, data[3].users, date))
    .catch(error => console.log(error));


function createHotel(rooms, bookings, roomServices, customers, date) {
  hotel = new Hotel(rooms, bookings, roomServices, customers, date);
  $('.date-today').text(date);
  hotel.returnTodaysBookings(date);
  hotel.returnTodaysRoomServices(date);
  hotel.calculateTotalRevenue(date);
  hotel.calucuatePercentOccupancy(date);
  hotel.caluculateNumRoomsAvailble(date);
}

$(document).ready(() => {
  $('.main-content').hide();
})

$('.enter-btn').click(() => {
  $('.splash').fadeOut(3000);
  $('.main-content').fadeIn(5000);
})

$('.search-customer-btn').click(() => {
  let id = $('.customer-search').val();
  id = parseInt(id);
  $('.customer-search').val('');
  hotel.selectExistingCustomer(id);
  console.log(hotel.selectedCustomer)
  domUpdates.showSelectedCustomer(hotel.selectedCustomer);
  domUpdates.appendSelectedCustomerBookings(hotel.selectedCustomer, hotel.rooms);
  domUpdates.appendSelectedCustomerOrders(hotel.selectedCustomer, hotel.rooms)
})



