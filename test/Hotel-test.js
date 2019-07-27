import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import rooms from '../src/data/roomsSampleData';
import bookings from '../src/data/bookingsSampleData'
import customers from '../src/data/customersSampleData';
import roomServices from '../src/data/roomServicesSampleData';

describe('Hotel', () => {

  let hotel, date;
  beforeEach(() => {
    date = '2019/07/28';
    hotel = new Hotel(rooms, customers, bookings, roomServices, date);
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should return all daily room service charges', () => {
    const dailyCharges = hotel.returnTodaysRoomServiceCharges(date);
    // console.log(charges);
    expect(dailyCharges[0].food).to.equal('Rustic Concrete Sandwich');
  });

  it('should return all daily bookings', () => {
    const dailyBookings = hotel.returnTodaysBookings(date);
    // console.log(dailyBookings.length);
    expect(dailyBookings.length).to.deep.eql(2);
  });

  it('should allow user to search for an existing customer', () => {
    const singleCustomer = hotel.returnExistingCustomer('Noemy Little');
    // console.log(singleCustomer)
    expect(singleCustomer.id).to.equal(5);
  });

    it('should be able to add a new customer', () => {
    hotel.addNewCustomer('Amy Rippeto');
    // expect(hotel.customers.length).to.equal(11);
  });

  it.skip('should return all information for given or added customer', () => {
    //append to appropriate tabs, not changing the main tab

//   it('should return an error if no results are found and maintain general info', () => {
//     // DOM
//   });


  });

  it.skip('should be able to book a room', () => {

  });

  it.skip('should be able to unbook a room', () => {

  });

  it.skip('should be able to change a booking', () => {
  
  });


});