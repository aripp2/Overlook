import $ from 'jquery';
import Hotel from '../src/Hotel';

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
  bookings.forEach(booking => {
    $('.todays-bookings').append(
      `<tr>
        <td>${booking.userID}</td>
        <td>${booking.roomNumber}</td>
        <td><button class="cancel-booking">Cancel</button></td>
        <td><button class="change-booking">Change</button></td>
      </tr>`);
  })
},

appendTodaysOrders(orders) {
  orders.forEach(order => {
    $('.todays-orders').append(
      `<tr>
        <td>${order.userId}</td>
        <td>${order.food}</td>
        <td>$${order.totalCost}</td>
      </tr>`);
  })
},

showSelectedCustomer(customer) {
  if (customer === undefined) {
    alert('No Results Found');
    // error No results found
  } else {
  $('.selected-customer').text(customer.name);
  $('.customer-info').text(`You have selected customer #${customer.id}: ${customer.name}`);
  }
},

appendSelectedCustomerBookings(customer, rooms) {
  if (customer.selectedBookings === []) {
    alert('No Bookings');
    // append No Bookings to show
    // option to add booking
  } else {
    let sortedBookings = customer.selectedBookings.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

    sortedBookings.forEach(booking => {
    let room = rooms.find(room => room.number === booking.roomNumber);
    // need to replace exsiting customer data not add to it 
    $('.selected-bookings').append(
      `<tr>
        <td>${booking.date}</td>
        <td>${booking.roomNumber}</td>
        <td>${room.roomType}</td>
        <td>${room.bidet}</td>
        <td>${room.bedSize}</td>
        <td>${room.numBeds}</td>
        <td>$${room.costPerNight}</td>
        <td><button class="cancel-booking">Cancel</button></td>
        <td><button class="change-booking">Change</button></td>
      </tr>`)
    })
  }
},

appendSelectedCustomerOrders(customer) {
  if (customer.selectedOrders === []) {
    alert('No Orders Yet!');
  } else {
    let sortedOrders = customer.selectedOrders.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    sortedOrders.forEach(order => {
      $('.selected-orders').append(
        `<tr>
          <td>${order.date}</td>
          <td>${order.food}</td>
          <td>$${order.totalCost}</td>
        </tr>`)
    })  
  }
},



};