

class Customer {
  constructor(id, name, bookings, roomServices) {
    this.id = id;
    this.name = name;
    this.selectedBookings = this.findCustomerBookings(this.id, bookings) || [];
    this.selectedOrders = this.findCustomerOrders(this.id, roomServices) || [];
  }

  findCustomerBookings(id, bookings) {
    // console.log('bookings', bookings)
    let customerBookings = bookings.filter(booking => booking.userID === id);
    return customerBookings;
  }
  findCustomerOrders(id, roomServices) {
    return roomServices.filter(order => order.userId === id);
  }

}

export default Customer;