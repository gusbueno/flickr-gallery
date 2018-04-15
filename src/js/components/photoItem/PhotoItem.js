'use strict'

import React, { PureComponent } from 'react'

import styles from './PhotoItem.scss'

class PhotoItem extends PureComponent {
  render () {
    return (
      <div className={styles['photo-item']}>
        <div className={styles['photo-wrapper']}>
          <img src={`https://farm${this.props.photo.farm}.staticflickr.com/${this.props.photo.server}/${this.props.photo.id}_${this.props.photo.secret}.jpg`} alt={this.props.photo.title} />
        </div>
        <div className={styles['photo-info']}>
          <span className={styles['photo-title']}>{this.props.photo.title}</span>
          <div className={styles['photo-owner-wrapper']}>
            <a href={`https://www.flickr.com/photos/${this.props.photo.owner}/${this.props.photo.id}`} target='blank' className={styles['photo-owner-text']}>{this.props.photo.ownername}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoItem
