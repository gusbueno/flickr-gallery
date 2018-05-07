/* globals describe it */

import request from 'supertest'

import app from '../src/index'

describe('API endpoints', () => {
  it('should return status 200 on request photos', (done) => {
    request(app)
      .get('/api/photos?term=galway&page=1')
      .expect(200, done)
  })

  it('should return status 200 on request photo detail', (done) => {
    request(app)
      .get('/api/photo/detail?id=28078041418&secret=32be2f97ab')
      .expect(200, done)
  })
})
