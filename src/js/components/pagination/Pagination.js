import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import styles from './Pagination.scss'

class Pagination extends PureComponent {
  _renderPaginationButtons () {
    const buttons = []
    const { page, pages } = this.props
    page > 1 && buttons.push(<div onClick={() => this.props.onNavigateToPage(page - 1)} key='back' className={styles['page-button']}>Back</div>)
    const toPage = (page + 10) <= pages ? page + 9 : pages
    for (let i = page; i <= toPage; i++) {
      buttons.push(<div onClick={() => this.props.onNavigateToPage(i)} key={i} className={[styles['page-button'], i === page && styles['current-page']].join(' ')}>{i}</div>)
    }
    page < pages && buttons.push(<div onClick={() => this.props.onNavigateToPage(page + 1)} key='next' className={styles['page-button']}>Next</div>)
    return buttons
  }

  render () {
    return (
      <div className={styles['pagination']}>
        {this.props.pages && this._renderPaginationButtons()}
      </div>
    )
  }
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.any,
  onNavigateToPage: PropTypes.func.isRequired
}

export default Pagination
