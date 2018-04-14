'use strict'

import React, { PureComponent } from 'react'

import styles from './PhotoItem.scss'

class PhotoItem extends PureComponent {
  render () {
    return (
      <div className={styles['photo-item']}>
        <img src={`https://farm${this.props.photo.farm}.staticflickr.com/${this.props.photo.server}/${this.props.photo.id}_${this.props.photo.secret}.jpg`} alt={this.props.photo.title} />
      </div>
    )
  }
}

export default PhotoItem
