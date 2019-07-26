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
    console.log(singleCustomer)
    expect(singleCustomer.id).to.equal(5);
  });

  


  
});