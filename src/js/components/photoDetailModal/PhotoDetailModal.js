'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import styles from './PhotoDetailModal.scss'

const PhotoDetailModal = ({ photo, onClosePhotoDetail }) => {
  return (
    <div className={styles['photo-detail-modal']}>
      <div className={styles['photo-header']}>
        <span className={styles['photo-title']}>{photo.title._content}</span>
        <span className={styles['close']} onClick={() => onClosePhotoDetail()}>Close</span>
      </div>
      <div className={styles['photo-wrapper']}>
        <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title._content} />
      </div>
      <div className={styles['photo-info']}>
        <div className={styles['info-group']}>
          <span className={styles['label']}>Owner: </span>
          <span className={styles['value']}>{photo.owner.username}</span>
        </div>

        <div className={styles['info-group']}>
          <span className={styles['label']}>Date taken: </span>
          <span className={styles['value']}>{photo.dates.taken}</span>
        </div>

        <div className={styles['info-group']}>
          <span className={styles['label']}>Views: </span>
          <span className={styles['value']}>{photo.views}</span>
        </div>

        <div className={styles['info-group']}>
          <span className={styles['label']}>Comments: </span>
          <span className={styles['value']}>{photo.comments._content}</span>
        </div>
        <a href={photo.urls.url[0]._content} target='blank'>Full size</a>
      </div>
    </div>
  )
}

PhotoDetailModal.propTypes = {
  photo: PropTypes.object.isRequired,
  onClosePhotoDetail: PropTypes.func.isRequired
}

export default PhotoDetailModal
