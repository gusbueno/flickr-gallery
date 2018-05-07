import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { onClosePhotoDetail } from '../../actions/photoDetail'
import PhotoDetailModal from '../../components/photoDetailModal/PhotoDetailModal'

class PhotoDetail extends PureComponent {
  componentDidMount () {
    document.body.classList.toggle('modalOpened', this.props.showModal)
  }

  componentWillReceiveProps (nextProps) {
    document.body.classList.toggle('modalOpened', nextProps.showModal)
  }

  _showModal () {
    if (this.props.showModal) {
      return <PhotoDetailModal photo={this.props.photo} onClosePhotoDetail={this.props.onClosePhotoDetail} />
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
