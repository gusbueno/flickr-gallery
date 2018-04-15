'use strict'

import { ON_PHOTO_DETAIL_RECEIVED, ON_CLOSE_PHOTO_DETAIL } from '../constants/ActionTypes'

const initialState = {
  showModal: false,
  photo: {}
}

const photoDetail = (state = initialState, action) => {
  switch (action.type) {
    case ON_PHOTO_DETAIL_RECEIVED:
      const { photo } = action
      return { ...state, showModal: true, photo }
    case ON_CLOSE_PHOTO_DETAIL:
      return { ...state, showModal: false, photo: {} }
    default:
      return state
  }
}

export default photoDetail
