'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { requestPhotos } from '../../actions/gallery'
import { requestPhotoDetail } from '../../actions/photoDetail'
import styles from './Gallery.scss'
import PhotoItem from '../../components/photoItem/PhotoItem'
import Pagination from '../../components/pagination/Pagination'

class Gallery extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      term: 'ireland' // default term: 'ireland'
    }

    this._onNavigateToPage = this._onNavigateToPage.bind(this)
  }

  componentDidMount () {
    this.props.onRequestPhotos(this.state.term, 1)
  }

  _onNavigateToPage (page) {
    console.log(page)
    this.props.onRequestPhotos(this.state.term, page)
  }

  _renderPhotos () {
    return this.props.photos.map(photo => {
      return <PhotoItem key={photo.id} photo={photo} onRequestPhotoDetail={this.props.onRequestPhotoDetail} />
    })
  }

  render () {
    return (
      <div className={styles.gallery}>
        <Pagination page={this.props.page} pages={this.props.pages} onNavigateToPage={this._onNavigateToPage} />
        <div className={styles['photo-list']}>
          {this._renderPhotos()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    photos: state.gallery.photos,
    page: state.gallery.page,
    pages: state.gallery.pages
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    onRequestPhotos: (term, page) => {
      dispatch(requestPhotos(term, page))
    },
    onRequestPhotoDetail: (photo) => {
      dispatch(requestPhotoDetail(photo))
    }
  })
}

Gallery.propTypes = {
  photos: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  pages: PropTypes.any,
  onRequestPhotos: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
