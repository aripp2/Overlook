import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import rooms from '../src/data/roomsSampleData';
import bookings from '../src/data/bookingsSampleData'
import customers from '../src/data/customersSampleData';
import roomServices from '../src/data/roomServicesSampleData';

describe('Hotel', () => {

  let date, hotel;
  beforeEach(() => {
    date = '2019/08/02';
    hotel = new Hotel(rooms, bookings, roomServices, customers, date);
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should return all daily room service charges', () => {
    const dailyOrders = hotel.returnTodaysRoomServices(date);
    // console.log(charges);
    expect(dailyOrders[0].food).to.equal('Rustic Concrete Sandwich');
  });

  it('should return all daily bookings', () => {
    const dailyBookings = hotel.returnTodaysBookings(date);
    // console.log(dailyBookings.length);
    expect(dailyBookings.length).to.deep.eql(2);
  });

  it('should allow user to search for an existing customer', () => {
    const selectedCustomer = hotel.selectExistingCustomer('Noemy Little');
    // console.log(hotel.selectedCustomer)
    expect(hotel.selectedCustomer.id).to.equal(5);
    expect(hotel.selectedCustomer.name).to.equal('Noemy Little');
  });

  it('should be able to add a new customer', () => {
    hotel.addNewCustomer('Amy Rippeto');
    expect(hotel.customers.length).to.equal(11);
  });

  it.skip('should return all information for given or added customer', () => {
    hotel.selectExistingCustomer('Noemy Little');
    hotel.findAllCustomerInfo();
    // expect(hotel.)    



    //append to appropriate tabs, not changing the main tab

//   it('should return an error if no results are found and maintain general info', () => {
//     // DOM
//   });


  });

  it('should be able to book a room', () => {
    hotel.addBooking(2, date, 2);
    expect(hotel.bookings.length).to.equal(21);
  });

  it('should be able to unbook a room', () => {
    hotel.deleteBooking(3, '2019/08/27', 3);
    expect(hotel.bookings.length).to.equal(19);
  });

  it.skip('should be able to change a booking', () => {
  //need to work on this
  });

  it('should be able to purchase room service', () => {
    hotel.addOrder(2, date, 'Tasty Wooden Sandwich', 11.15);
    const updatedOrders = hotel.returnTodaysRoomServices(date);
    // console.log('total', updatedOrders.length)
    expect(updatedOrders.length).to.equal(3)
  });

  it('should return total num room available today', () => {
    const numAvailable = hotel.caluculateNumRoomsAvailble(date);
    // console.log(numAvailable);
    expect(numAvailable).to.equal(18);
  });

  it('should return percent of rooms occupied today', () => {
    const percentOcc = hotel.calucuatePercentOccupancy(date);
    // console.log(percentOcc);
    expect(percentOcc).to.equal(10);
  });

  it('should return total revenue for today', () => {
    const totalRevenue = hotel.calculateTotalRevenue(date);
    // console.log(totalRevenue)
    expect(totalRevenue).to.equal(434.81);
  });


});