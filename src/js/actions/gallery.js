'use strict'

import axios from 'axios'
// import {  } from '../constants/ActionTypes'
import { API_KEY, BASE_URL } from '../constants/FlickrData'

export const requestPhotos = (term) => {
  return (dispatch, getState) => {
    axios.get(`${BASE_URL}/?method=flickr.photos.&api_key=${API_KEY}&text=${term}&format=json`)
      .then(result => {
        console.log(result)
      })
  }
}
