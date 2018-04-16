'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import styles from './PhotoItem.scss'

const PhotoItem = ({ photo, onRequestPhotoDetail }) => {
  return (
    <div className={styles['photo-item']}>
      <div className={styles['photo-wrapper']} onClick={() => onRequestPhotoDetail(photo)}>
        <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} />
      </div>
      <div className={styles['photo-info']}>
        <span className={styles['photo-title']}>{photo.title}</span>
        <div className={styles['photo-owner-wrapper']}>
          <a href={`https://www.flickr.com/photos/${photo.owner}/${photo.id}`} target='blank' className={styles['photo-owner-text']}>{photo.ownername}</a>
        </div>
      </div>
    </div>
  )
}

PhotoItem.propTypes = {
  photo: PropTypes.object.isRequired,
  onRequestPhotoDetail: PropTypes.func.isRequired
}

export default PhotoItem
