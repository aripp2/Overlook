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
  // console.log(bookings)
  bookings.forEach(booking => {
    $('.todays-bookings').append(
      `<tr>
        <td>${booking.userID}</td>
        <td>${booking.roomNumber}</td>
      </tr>`);
  })
},

appendTodaysOrders(orders) {
  // console.log(orders)
  orders.forEach(order => {
    $('.todays-orders').append(
      `<tr>
        <td>${order.userID}</td>
        <td>${order.food}</td>
        <td>$${order.totalCost}</td>
      </tr>`);
  })
},

showSelectedCustomerName(name) {
  $('.selected-customer').text(name);
},




};