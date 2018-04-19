'use strict'

import axios from 'axios'

import { ON_PHOTOS_REQUEST, ON_PHOTOS_RECEIVED } from '../constants/ActionTypes'
import { API_KEY, BASE_URL } from '../constants/FlickrData'
import { to } from '../utils'

export const onPhotosRequest = () => {
  return {
    type: ON_PHOTOS_REQUEST
  }
}

export const onPhotosReceived = (data) => {
  return {
    type: ON_PHOTOS_RECEIVED,
    data
  }
}

export const requestPhotos = (term, page) => {
  return async (dispatch) => {
    dispatch(onPhotosRequest())
    const [err, result] = await to(axios.get(`${BASE_URL}/?method=flickr.photos.search&api_key=${API_KEY}&text=${term}&page=${page}&extras=owner_name&format=json&nojsoncallback=1`))
    err && console.log(err)
    result && dispatch(onPhotosReceived(result.data.photos))
  }
}
