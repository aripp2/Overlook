import Customer from '../src/Customer';
import Booking from '../src/Booking';
import RoomService from '../src/RoomService';
import domUpdates from '../src/domUpdates';

class Hotel {
  constructor(rooms, bookings, roomServices, customers, date) {
    this.rooms = rooms;
    this.bookings = this.instantiateBookings(bookings);
    this.roomServices = this.instantiateRoomServices(roomServices);
    this.customers = this.instantiateCustomers(customers, this.bookings, this.roomServices);
    this.date = date;
    this.dailyBookings;
    this.dailyOrders;
    this.selectedCustomer;
    // console.log('here', this.customers)
  }

  instantiateBookings(bookings) {
    return bookings.map(booking => new Booking(booking.userID, booking.date, booking.roomNumber));
  }

  instantiateRoomServices(roomServices) {
    return roomServices.map(order => new RoomService(order.userID, order.date, order.food, order.totalCost));
  }

  instantiateCustomers(customers, bookings, roomServices) {
   return customers.map(customer => new Customer(customer.id, customer.name, this.bookings, this.roomServices));
  }

  returnTodaysRoomServices(date) {
    this.dailyOrders = this.roomServices.filter(order => order.date === date);
    domUpdates.appendTodaysOrders(this.dailyOrders);
  }

  returnTodaysBookings(date) {
    this.dailyBookings = this.bookings.filter(booking => booking.date === date);
    domUpdates.appendTodaysBookings(this.dailyBookings);
  }

  selectExistingCustomer(id) {
    this.selectedCustomer = this.customers.find(customer => customer.id === id);
  }

  addNewCustomer(name) {
    let id = this.customers.length += 1;
    let addedCustomer = new Customer(id, name);
    let clean = this.customers.filter(customer => customer !== undefined);
    // used filter to eliminate undefined values
    // console.log(addedCustomer)
    clean.push(addedCustomer);
    this.customers = clean;
  }


  addBooking(id, date, roomNum) {
    let addedBooking = new Booking(id, date, roomNum);
    this.bookings.push(addedBooking);
  }

  deleteBooking(id, date, roomNum) {
    this.bookings = this.bookings.filter(booking => !(booking.userID === id && booking.date === date && booking.roomNumber === roomNum));
  }

  changeBooking(id, date, roomNum, newDate, newRoom) {
    this.deleteBooking(id, date, roomNum);
// need to only be able to pick from available rooms
    this.addBooking(id, newDate, newRoom);

  }

  addOrder(id, date, food, cost) {
    let addedOrder = new RoomService(id, date, food, cost);
    this.roomServices.push(addedOrder);
  }

  caluculateNumRoomsAvailble(date) {
    let numBooked = this.dailyBookings.length;
    let totalRooms = this.rooms.length;
    let available = totalRooms -= numBooked;
    domUpdates.appendNumRoomsAvailable(available);
    return available;
  }

  calucuatePercentOccupancy(date) {
    let numBooked = this.dailyBookings.length;
    let totalRooms = this.rooms.length;
    let percent = +((numBooked / totalRooms) * 100).toFixed();
    domUpdates.appendPercentOccupancy(percent);
    return percent;
  }

  calculateTotalRevenue(date) {
    let bookingsTotal = this.dailyBookings.reduce((total, booking) => {
      let roomCost = this.rooms.find(room => room.number === booking.roomNumber).costPerNight;
      total += roomCost;
      return total;
    }, 0);

    let ordersTotal = this.dailyOrders.reduce((total, order) => {
      total += order.totalCost;
      return total;
    }, 0);
  
    let totalRevenue = +(bookingsTotal + ordersTotal).toFixed(2);
    domUpdates.appendRevenue(totalRevenue);
    return totalRevenue;
  }

}

export default Hotel;
