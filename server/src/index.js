import express from 'express'
import bodyParser from 'body-parser'

import photoProvider from './controllers/PhotoProvider'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/photos', photoProvider.getPhotos)
app.get('/api/photo/detail', photoProvider.getPhotoDetail)

app.listen(8080, () => console.log('server running on port 8080!'))
