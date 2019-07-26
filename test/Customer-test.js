import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';

describe('Customer', () => {

  let customer;
  beforeEach(() => {
    customer = new Customer(11, 'Amy Rippeto')
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceOf(Customer);
  });

  it('should be able to add a new customer', => {
    const newCustomer = customer.addNewCustomer()
  });



});