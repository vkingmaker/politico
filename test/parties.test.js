'use strict';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);
/**
 * Test suite for /POST `/api/v1/parties`
 * 
 */

describe('/POST /api/v1/parties', () => {
it('it should ADD a new political party to the data structure', (done) => {
  const party = {
    name:'PPS',
    hqAddress: 'Lagos',
    logoUrl: '/public/logo/PPS.png'
   };
    chai.request(server)
      .post('/api/v1/parties')
      .send(party)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.data[0].should.have.property('name').eql("PPS");
        res.body.data[0].should.have.property('id').eql(1);
        done();
      });
  });
});