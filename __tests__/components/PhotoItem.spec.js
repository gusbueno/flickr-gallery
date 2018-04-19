'use strict'

/* global describe, it, expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import PhotoItem from '../../src/js/components/photoItem/PhotoItem'

describe('<PhotoItem /> Component', () => {
  const photo = {
    title: 'Title',
    farm: 123,
    server: '123',
    id: '123',
    secret: '123',
    owner: '123',
    ownername: 'Pepe'
  }
  it('should match with the snapshot', () => {
    const tree = renderer.create(
      <PhotoItem photo={photo} onRequestPhotoDetail={() => {}} />
    )
    const json = tree.toJSON()
    expect(json).toMatchSnapshot()
  })

  const onRequestPhotoDetailMock = jest.fn()
  const photoItemShallow = shallow(
    <PhotoItem photo={photo} onRequestPhotoDetail={onRequestPhotoDetailMock} />
  )

  it('should exists', () => {
    expect(photoItemShallow.length).toEqual(1)
  })

  it('should render pagination wrapper', () => {
    expect(photoItemShallow.find('.photo-item').length).toEqual(1)
  })

  it('should call onRequestPhotoDetail with photo object on click photo', () => {
    photoItemShallow.find('.photo-wrapper').first().simulate('click')
    expect(onRequestPhotoDetailMock).toHaveBeenCalledWith(photo)
  })
})
