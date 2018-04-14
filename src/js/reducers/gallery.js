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
      const pages = action.data.pages
      const page = (action.data.page + 1) <= pages ? action.data.page + 1 : pages
      const photos = action.data.photo
      return { ...state, page, pages, photos }
    default:
      return state
  }
}

export default gallery
