import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import Gallery from './containers/gallery/Gallery'
import PhotoDetail from './containers/photoDetail/PhotoDetail'

// load common styles
import commonStyles from '../styles/common.scss'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <div>
      <Gallery />
      <PhotoDetail />
    </div>
  </Provider>,
  document.getElementById('root')
)
