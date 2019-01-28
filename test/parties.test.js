// 'use strict';
let request = require('supertest');
let server = require('../app');
let expect = require('expect');

/**
 * Test suite for /POST `/api/v1/parties`
 * 
 */

describe('/POST /api/v1/parties', () => {
  it('it should ADD a new political party to the data structure', (done) => {
    const party = {
      name: 'PPS',
      hqAddress: 'Lagos',
      logoUrl: '/public/logo/PPS.png',
    };
    request(server)
      .post('/api/v1/parties')
      .send(party)
      .expect(201)
      .expect((res) => {
        expect(res.body).toMatchObject({
          status: 201,
          data: [{
            id:1,
            name:'PPS'
          }]
        })
      }).end(done);
  });
});
