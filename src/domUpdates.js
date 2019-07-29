import $ from 'jquery';

export default {

appendRevenue(total) {
  $('.total-revenue').text(`Today\'s total Revenue: $${total}`);
},

appendPercentOccupancy(percent) {
  $('.percent-occupancy').text(`We are ${percent}% occupied today`);
},

appendNumRoomsAvailable(num) {
  $('.rooms-available').text(`We have ${num} rooms available today`);
},

appendTodaysBookings(bookings) {
  console.log(bookings)
  bookings.forEach(booking => {
    $('.todays-bookings').append(`<li>Customer ${booking.userID} in Room Number ${booking.roomNumber}</li>`);
  })
},

appendTodaysOrders(orders) {
  console.log(orders)
  orders.forEach(order => {
    $('.todays-orders').append(`<li>Customer ${order.userID} is getting a ${order.food} for $${order.totalCost}</li>`);
  })
},




};