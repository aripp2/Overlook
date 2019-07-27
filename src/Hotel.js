import Customer from '../src/Customer';

class Hotel {
  constructor(rooms, customers, bookings, roomServices, date) {
    this.rooms = rooms;
    this.customers = customers;
    this.bookings = bookings;
    this.roomServices = roomServices;
    this.date = date;
  }

  returnTodaysRoomServiceCharges(date) {
    return this.roomServices.filter(service => service.date === date);
  }

  returnTodaysBookings(date) {
    return this.bookings.filter(booking => booking.date === date);
  }

  returnExistingCustomer(name) {
    return this.customers.find(customer => customer.name === name);
  }

  addNewCustomer(name) {
    let id = this.customers.length += 1;
    let addedCustomer = new Customer(id, name);
    console.log(addedCustomer)
    this.customers.push(addedCustomer);
    console.log(this.customers)
  }

  findAllCustomerInfo() {
    //error message if no results
  }

  addBooking() {

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