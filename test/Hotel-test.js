import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import rooms from '../src/data/roomsSampleData';
import bookings from '../src/data/bookingsSampleData'
import customers from '../src/data/customersSampleData';
import roomServices from '../src/data/roomServicesSampleData';

describe('Hotel', () => {

  let hotel;
  beforeEach(() => {
    hotel = new Hotel(rooms, customers, bookings, roomServices, '2019/07/28');
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

});