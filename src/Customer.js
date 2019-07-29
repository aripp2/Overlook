

class Customer {
  constructor(id, name, bookings, roomServices) {
    this.id = id;
    this.name = name;
    this.selectedBookings = this.findCustomerBookings(this.id, bookings) || [];
    this.selectedOrders = this.findCustomerOrders(this.id, roomServices) || [];
  }

  findCustomerBookings(id, bookings) {
    return bookings.filter(booking => booking.userID === id);
  }
// filter is not working here???
  findCustomerOrders(id, roomServices) {
    return roomServices.filter(order => order.userID === id);
  }

  //   findAllCustomerInfo() {
  //   let selectedBookings = this.bookings.filter(booking => booking.userID === this.selectedCustomer.id);
  //   let selectedOrders = this.roomServices.filter(order => order.userID === this.selectedCustomer.id);
  //   // console.log('bookings', selectedBookings)
  //   // console.log('orders', selectedOrders)
  //   //error message if no results
  // }
}

export default Customer;