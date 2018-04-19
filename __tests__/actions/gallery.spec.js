'use strict'

/* global describe, it, expect */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { ON_PHOTOS_REQUEST, ON_PHOTOS_RECEIVED } from '../../src/js/constants/ActionTypes'
import { BASE_URL, API_KEY } from '../../src/js/constants/FlickrData'
import * as actions from '../../src/js/actions/gallery'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Gallery actions', () => {
  it('should dispatch ON_PHOTOS_REQUEST when onPhotosRequest is fired', () => {
    const expectedActions = [
      { type: ON_PHOTOS_REQUEST }
    ]
    const store = mockStore()
    store.dispatch(actions.onPhotosRequest())
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch ON_PHOTOS_RECEIVED when onPhotosReceived is fired', () => {
    const data = { page: 2, pages: 200, photo: [] }
    const expectedActions = [
      { type: ON_PHOTOS_RECEIVED, data }
    ]
    const store = mockStore()
    store.dispatch(actions.onPhotosReceived(data))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('it should dispatch ON_PHOTOS_REQUEST and ON_PHOTOS_RECEIVED when requestPhotos is fired', () => {
    const photos = { page: 2, pages: 200, photo: [] }
    const expectedActions = [
      { type: ON_PHOTOS_REQUEST },
      { type: ON_PHOTOS_RECEIVED, data: photos }
    ]

    const mock = new MockAdapter(axios)
    mock.onGet(`${BASE_URL}/?method=flickr.photos.search&api_key=${API_KEY}&text=ireland&page=2&extras=owner_name&format=json&nojsoncallback=1`).reply(200, {
      photos
    })

    const store = mockStore()
    return store.dispatch(actions.requestPhotos('ireland', 2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
