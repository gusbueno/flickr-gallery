/* global describe, it, expect */

import { ON_PHOTO_DETAIL_RECEIVED, ON_CLOSE_PHOTO_DETAIL } from '../../src/js/constants/ActionTypes'
import photoDetail from '../../src/js/reducers/photoDetail'

const initialState = {
  showModal: false,
  photo: {}
}

describe('PhotoDetail reducer', () => {
  it('should return default state', () => {
    expect(photoDetail(undefined, {})).toEqual(initialState)
  })

  it('should set showModal as true and set data into photo prop when ON_PHOTO_DETAIL_RECEIVED action is fired', () => {
    const photo = {
      title: 'Ireland',
      id: 1
    }
    expect(photoDetail(initialState, { type: ON_PHOTO_DETAIL_RECEIVED, photo })).toEqual({ ...initialState, showModal: true, photo })
  })

  it('should set showModal as false and set photo as empty object when ON_CLOSE_PHOTO_DETAIL action is fired', () => {
    expect(photoDetail(initialState, { type: ON_CLOSE_PHOTO_DETAIL })).toEqual({ ...initialState, showModal: false, photo: {} })
  })
})
