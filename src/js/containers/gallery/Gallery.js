'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { requestPhotos } from '../../actions/gallery'
import { requestPhotoDetail } from '../../actions/photoDetail'
import styles from './Gallery.scss'
import PhotoItem from '../../components/photoItem/PhotoItem'

class Gallery extends PureComponent {
  componentDidMount () {
    this.props.onRequestPhotos('ireland') // default term: 'ireland'
  }

  _renderPhotos () {
    return this.props.photos.map(photo => {
      return <PhotoItem key={photo.id} photo={photo} onRequestPhotoDetail={this.props.onRequestPhotoDetail} />
    })
  }

  render () {
    return (
      <div className={styles.gallery}>
        <div className={styles['photo-list']}>
          {this._renderPhotos()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    photos: state.gallery.photos
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    onRequestPhotos: (term) => {
      dispatch(requestPhotos(term))
    },
    onRequestPhotoDetail: (photo) => {
      dispatch(requestPhotoDetail(photo))
    }
  })
}

Gallery.propTypes = {
  photos: PropTypes.array.isRequired,
  onRequestPhotos: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
