import chai from 'chai';
const expect = chai.expect;

import Booking from '../src/Booking';

describe('Bookings', () => {

  let booking;
  beforeEach(() => {
    booking = new Booking(2, '2019/07/28', 7)
  });

  it('should be an instance of Booking', () => {
    expect(booking).to.be.an.instanceOf(Booking);
  });

});