'use strict'

/* global describe, it, expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Pagination from '../../src/js/components/pagination/Pagination'

describe('<Pagination /> Component', () => {
  it('should match with the snapshot', () => {
    const tree = renderer.create(
      <Pagination page={1} pages={20} onNavigateToPage={() => {}} />
    )
    const json = tree.toJSON()
    expect(json).toMatchSnapshot()
  })

  const onNavigateToPageMock = jest.fn()
  const paginationShallow = shallow(
    <Pagination page={1} pages={20} onNavigateToPage={onNavigateToPageMock} />
  )

  it('should exists', () => {
    expect(paginationShallow.length).toEqual(1)
  })

  it('should render pagination wrapper', () => {
    expect(paginationShallow.find('.pagination').length).toEqual(1)
  })

  it('should render eleven buttons', () => {
    expect(paginationShallow.find('.page-button').length).toEqual(11)
  })

  it('should render last button as Next button if current page is not the last', () => {
    expect(paginationShallow.find('.page-button').last().text()).toEqual('Next')
  })

  it('should render Back button if current page is not the first', () => {
    paginationShallow.setProps({ page: 2 })
    expect(paginationShallow.find('.page-button').first().text()).toEqual('Back')
  })

  it('should not render Next button if current page is the last', () => {
    paginationShallow.setProps({ page: 20 })
    expect(paginationShallow.find('.page-button').last().text()).not.toEqual('Next')
  })

  it('should call onNavigateToPage with page number on click some button', () => {
    paginationShallow.setProps({ page: 2 })
    paginationShallow.find('.page-button').at(3).simulate('click')
    expect(onNavigateToPageMock).toHaveBeenCalledWith(4)
  })

  it('should call onNavigateToPage with the before page number on click Back button', () => {
    paginationShallow.find('.page-button').first().simulate('click')
    expect(onNavigateToPageMock).toHaveBeenCalledWith(1)
  })

  it('should call onNavigateToPage with the next page number on click Next button', () => {
    paginationShallow.find('.page-button').last().simulate('click')
    expect(onNavigateToPageMock).toHaveBeenCalledWith(3)
  })
})
