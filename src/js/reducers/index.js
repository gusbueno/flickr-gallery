import { combineReducers } from 'redux'

import gallery from './gallery'
import photoDetail from './photoDetail'

const rootReducer = combineReducers({
  gallery,
  photoDetail
})

export default rootReducer
