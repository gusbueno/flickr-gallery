'use strict'

import { ON_PHOTOS_RECEIVED } from '../constants/ActionTypes'

const initialState = {
  page: 1,
  pages: null,
  photos: []
}

const gallery = (state = initialState, action) => {
  switch (action.type) {
    case ON_PHOTOS_RECEIVED:
      const { page, pages } = action.data
      const photos = action.data.photo
      return { ...state, page, pages, photos }
    default:
      return state
  }
}

export default gallery
