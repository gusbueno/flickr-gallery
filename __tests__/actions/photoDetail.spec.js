/* global describe, it, expect */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { ON_PHOTO_DETAIL_RECEIVED, ON_CLOSE_PHOTO_DETAIL } from '../../src/js/constants/ActionTypes'
import * as actions from '../../src/js/actions/photoDetail'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('PhotoDetail actions', () => {
  it('should dispatch ON_PHOTO_DETAIL_RECEIVED action when onPhotoDetailReceived is fired', () => {
    const photo = { title: 'Galway', id: 2 }
    const expectedActions = [
      { type: ON_PHOTO_DETAIL_RECEIVED, photo }
    ]
    const store = mockStore()
    store.dispatch(actions.onPhotoDetailReceived(photo))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch ON_CLOSE_PHOTO_DETAIL action when onClosePhotoDetail is fired', () => {
    const expectedActions = [
      { type: ON_CLOSE_PHOTO_DETAIL }
    ]
    const store = mockStore()
    store.dispatch(actions.onClosePhotoDetail())
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch ON_PHOTO_DETAIL_RECEIVED action with photo data when requestPhotoDetail is fired', () => {
    const photo = { title: 'Galway', id: 2 }
    const expectedActions = [
      { type: ON_PHOTO_DETAIL_RECEIVED, photo }
    ]

    const mock = new MockAdapter(axios)
    mock.onGet(`http://localhost:8080/api/photo/detail?id=2&secret=123`).reply(200, {
      photo
    })

    const store = mockStore()
    return store.dispatch(actions.requestPhotoDetail({ id: 2, secret: 123 })).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
