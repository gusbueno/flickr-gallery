'use strict'

import axios from 'axios'

import { ON_PHOTO_DETAIL_RECEIVED, ON_CLOSE_PHOTO_DETAIL } from '../constants/ActionTypes'
import { API_KEY, BASE_URL } from '../constants/FlickrData'
import { to } from '../utils'

export const onPhotoDetailReceived = (photo) => {
  console.log(photo)
  return {
    type: ON_PHOTO_DETAIL_RECEIVED,
    photo
  }
}

export const onClosePhotoDetail = () => {
  return {
    type: ON_CLOSE_PHOTO_DETAIL
  }
}

export const requestPhotoDetail = (photo) => {
  return async (dispatch) => {
    const [err, result] = await to(axios.get(`${BASE_URL}/?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${photo.id}&secret=${photo.secret}&format=json&nojsoncallback=1`))
    err && console.log(err)
    result && dispatch(onPhotoDetailReceived(result.data.photo))
  }
}