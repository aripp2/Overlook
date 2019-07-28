

class Customer {
  constructor(id, name, bookings, orders) {
    this.id = id;
    this.name = name;
    this.bookings = bookings || [];
    this.orders = orders || [];
  }


}

export default Customer;