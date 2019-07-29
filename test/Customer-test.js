import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import Customer from '../src/Customer';
import rooms from '../src/data/roomsSampleData';
import bookings from '../src/data/bookingsSampleData'
import customers from '../src/data/customersSampleData';
import roomServices from '../src/data/roomServicesSampleData';
import domUpdates from "../src/domUpdates";

describe('Customer', () => {

  let hotel, date;
  beforeEach(() => {
    date = '2019/08/02';
    hotel = new Hotel(rooms, bookings, roomServices, customers, date);
  });

  it("should be a function", () => {
    expect(Customer).to.be.a("function");
  });

  

});