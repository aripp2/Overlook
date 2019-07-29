import Customer from '../src/Customer';
import Booking from '../src/Booking';
import RoomService from '../src/RoomService';
import domUpdates from '../src/domUpdates';

class Hotel {
  constructor(rooms, bookings, roomServices, customers, date) {
    this.rooms = rooms;
    this.bookings = this.instantiateBookings(bookings);
    this.roomServices = this.instantiateRoomServices(roomServices);
    this.customers = this.instantiateCustomers(customers);
    this.date = date;
    this.selectedCustomer;
    // console.log('here', this.customers)
  }

  instantiateBookings(bookings) {
    return bookings.map(booking => new Booking(booking.userID, booking.date, booking.roomNumber));
  }

  instantiateRoomServices(roomServices) {
    return roomServices.map(order => new RoomService(order.userID, order.date, order.food, order.totalCost));
  }

  instantiateCustomers(customers) {
   return customers.map(customer => new Customer(customer.id, customer.name, this.bookings, this.roomServices));
  }

  findAllCustomerInfo() {
    let selectedBookings = this.bookings.filter(booking => booking.userID === this.selectedCustomer.id);
    let selectedOrders = this.roomServices.filter(order => order.userID === this.selectedCustomer.id);
    // console.log('bookings', selectedBookings)
    // console.log('orders', selectedOrders)
    //error message if no results
  }

  returnTodaysRoomServices(date) {
    let dailyOrders = this.roomServices.filter(order => order.date === date);
    domUpdates.appendTodaysOrders(dailyOrders);
    return dailyOrders;
  }

  returnTodaysBookings(date) {
    let dailyBookings = this.bookings.filter(booking => booking.date === date);
    domUpdates.appendTodaysBookings(dailyBookings);
    return dailyBookings;
  }

  selectExistingCustomer(name) {
    this.selectedCustomer = this.customers.find(customer => customer.name === name);
  }

  addNewCustomer(name) {
    let id = this.customers.length += 1;
    let addedCustomer = new Customer(id, name);
    let clean = this.customers.filter(customer => customer !== undefined);
    // used filter to eliminate undefined values
    // console.log(addedCustomer)
    // console.log(this.customers[10]) 
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
    let numBooked = this.returnTodaysBookings(date).length;
    let totalRooms = this.rooms.length;
    let available = totalRooms -= numBooked;
    domUpdates.appendNumRoomsAvailable(available);
    return available;
  }

  calucuatePercentOccupancy(date) {
    let numBooked = this.returnTodaysBookings(date).length;
    let totalRooms = this.rooms.length;
    let percent = +(totalRooms / numBooked).toFixed();
    domUpdates.appendPercentOccupancy(percent);
    return percent;
  }

  calculateTotalRevenue(date) {
    let bookingsTotal = this.returnTodaysBookings(date).reduce((total, booking) => {
      let roomCost = this.rooms.find(room => room.number === booking.roomNumber).costPerNight;
      // console.log('each', roomCost)
      total += roomCost;
      // console.log('why', total)
      return total;
    }, 0);
    // console.log('book total', bookingsTotal)

    let ordersTotal = this.returnTodaysRoomServices(date).reduce((total, order) => {
      total += order.totalCost;
      return total;
    }, 0);
    // why am I getting crazy long numbers??
    // console.log('orders', ordersTotal)
    let totalRevenue = +(bookingsTotal + ordersTotal).toFixed(2);
    domUpdates.appendRevenue(totalRevenue);
    return totalRevenue;
  }

}

export default Hotel;
