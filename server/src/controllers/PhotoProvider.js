import axios from 'axios'

import { BASE_URL, API_KEY } from '../constants/FlickrData'
import { to } from '../../../src/js/utils'

class PhotoProvider {
  async getPhotos (req, res) {
    const { term, page } = req.query
    const [err, result] = await to(axios.get(`${BASE_URL}/?method=flickr.photos.search&api_key=${API_KEY}&text=${term}&page=${page}&extras=owner_name&format=json&nojsoncallback=1`))
    err && res.status(500).send(err)
    result && res.status(200).send(result.data)
  }

  async getPhotoDetail (req, res) {
    const { id, secret } = req.query
    const [err, result] = await to(axios.get(`${BASE_URL}/?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${id}&secret=${secret}&format=json&nojsoncallback=1`))
    err && res.status(500).send(err)
    result && res.status(200).send(result.data)
  }
}

export default new PhotoProvider()
