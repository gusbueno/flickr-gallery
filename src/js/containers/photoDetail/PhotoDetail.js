'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './PhotoDetail.scss'
import { onClosePhotoDetail } from '../../actions/photoDetail'

class PhotoDetail extends PureComponent {
  _showModal () {
    if (this.props.showModal) {
      return (
        <div className={styles['photo-detail']}>
          photo detail
        </div>
      )
    }

    return null
  }
  render () {
    return this._showModal()
  }
}

const mapStateToProps = (state) => {
  return ({
    photo: state.photoDetail.photo,
    showModal: state.photoDetail.showModal
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    onClosePhotoDetail: (term) => {
      dispatch(onClosePhotoDetail())
    }
  })
}

PhotoDetail.propTypes = {
  photo: PropTypes.object.isRequired,
  onClosePhotoDetail: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail)
