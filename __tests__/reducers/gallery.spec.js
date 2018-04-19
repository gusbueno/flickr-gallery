'use strict'

/* global describe, it, expect */

import { ON_PHOTOS_RECEIVED } from '../../src/js/constants/ActionTypes'
import gallery from '../../src/js/reducers/gallery'

const initialState = {
  page: 1,
  pages: null,
  photos: []
}

describe('Gallery reducer', () => {
  it('should return default state', () => {
    expect(gallery(undefined, {})).toEqual(initialState)
  })

  it('should update page, pages, and add photos when ON_PHOTOS_RECEIVED action is fired', () => {
    const data = {
      page: 2,
      pages: 200,
      photo: [{
        name: 'Ireland',
        id: 1
      }]
    }
    expect(gallery(initialState, { type: ON_PHOTOS_RECEIVED, data })).toEqual({ ...initialState, page: 2, pages: 200, photos: data.photo })
  })
})
