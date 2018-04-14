'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Gallery extends PureComponent {
  render () {
    return <h1>Gallery</h1>
  }
}

export default connect(null, {})(Gallery)
