import chai from 'chai';
const expect = chai.expect;

import RoomService from '../src/RoomService';

describe('RoomService', () => {

let roomService;
  beforeEach(() => {
    roomService = new RoomService(2, '2019/07/28', 'Rustic Cotton Sandwich', 17.33)
  });

  it('should be an instance of RoomService', () => {
    expect(roomService).to.be.an.instanceOf(RoomService);
  });

});