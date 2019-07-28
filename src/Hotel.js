import Customer from '../src/Customer';
import Booking from '../src/Booking';
import RoomService from '../src/RoomService';
// import domUpdates from '../scr/domUpdates';

class Hotel {
  constructor(rooms, bookings, roomServices, customers, date) {
    this.rooms = rooms;
    this.bookings = this.instantiateBookings(bookings);
    this.orders = this.instantiateRoomServices(roomServices);
    this.customers = this.instantiateCustomers(customers);
    this.date = date;
    this.selectedCustomer;
    // console.log('here', this.customers)
  }

  instantiateCustomers(customers) {
    return customers.map(customer => new Customer(customer.id, customer.name, this.bookings, this.orders));
  }

  instantiateBookings(bookings) {
    return bookings.map(booking => new Booking(booking.userID, booking.date, booking.roomNumber));
  }

  instantiateRoomServices(roomServices) {
    return roomServices.map(order => new RoomService(order.userID, order.date, order.food, order.totalCost));
  }

  returnTodaysRoomServiceCharges(date) {
    return this.roomServices.filter(service => service.date === date);
  }

  returnTodaysBookings(date) {
    return this.bookings.filter(booking => booking.date === date);
  }

  selectExistingCustomer(name) {
    this.selectedCustomer = this.customers.find(customer => customer.name === name);
  }

  addNewCustomer(name) {
    let id = this.customers.length += 1;
    let addedCustomer = new Customer(id, name);
    // console.log(addedCustomer)
    this.customers.push(addedCustomer);
    // console.log(this.customers)
  }

  findAllCustomerInfo() {
    let selectedBookings = this.bookings.filter(booking => booking.userID === this.selectedCustomer.id);
    let selectedOrders = this.roomServices.filter(order => order.userID === this.selectedCustomer.id);
    // console.log('bookings', selectedBookings)
    // console.log('orders', selectedOrders)
    //error message if no results
  }

  addBooking(id, date, roomNum) {
    let newBooking = new Booking(id, date, roomNum);
    console.log(newBooking['Booking'])
    this.bookings.push(newBooking)
    console.log(this.bookings)
  }

  deleteBooking() {

  }

  changeBooking() {

  }


}

export default Hotel;







    // console.log(this.roomServices)
    // console.log(date)
    // this.roomServices.reduce((total, service) => {
    //     if (service.date === date) {
    //       total += service.totalCost;
    //     }
    //   return total;
    // }, 0);