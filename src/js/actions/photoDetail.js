import axios from 'axios'

import { ON_PHOTO_DETAIL_RECEIVED, ON_CLOSE_PHOTO_DETAIL } from '../constants/ActionTypes'
import { to } from '../utils'

export const onPhotoDetailReceived = (photo) => {
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
    const [err, result] = await to(axios.get(`http://localhost:8080/api/photo/detail?id=${photo.id}&secret=${photo.secret}`))
    err && console.log(err)
    result && dispatch(onPhotoDetailReceived(result.data.photo))
  }
}
