

class Customer {
  constructor(id, name, bookings, roomServices) {
    this.id = id;
    this.name = name;
    this.bookings = bookings || [];
    this.roomServices = roomServices || [];
  }


}

export default Customer;