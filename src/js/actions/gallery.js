import axios from 'axios'

import { ON_PHOTOS_REQUEST, ON_PHOTOS_RECEIVED } from '../constants/ActionTypes'
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
    const [err, result] = await to(axios.get(`http://localhost:8080/api/photos?term=${term}&page=${page}`))
    err && console.log(err)
    result && dispatch(onPhotosReceived(result.data.photos))
  }
}
