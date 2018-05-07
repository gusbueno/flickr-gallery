/* global describe, it, expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import PhotoDetailModal from '../../src/js/components/photoDetailModal/PhotoDetailModal'

describe('<PhotoDetailModal /> Component', () => {
  const photo = {
    title: { _content: 'Title' },
    farm: 123,
    server: '123',
    id: '123',
    secret: '123',
    owner: { username: 'Pepe' },
    dates: { taken: '20/01/2018' },
    views: 12,
    comments: { _content: 12 },
    urls: {
      url: [{ _content: 'https://awesomeurl.com/my/photo' }]
    }
  }
  it('should match with the snapshot', () => {
    const tree = renderer.create(
      <PhotoDetailModal photo={photo} onClosePhotoDetail={() => {}} />
    )
    const json = tree.toJSON()
    expect(json).toMatchSnapshot()
  })

  const onClosePhotoDetailMock = jest.fn()
  const photoDetailModalShallow = shallow(
    <PhotoDetailModal photo={photo} onClosePhotoDetail={onClosePhotoDetailMock} />
  )

  it('should exists', () => {
    expect(photoDetailModalShallow.length).toEqual(1)
  })

  it('should render pagination wrapper', () => {
    expect(photoDetailModalShallow.find('.photo-detail-modal').length).toEqual(1)
  })

  it('should call onClosePhotoDetail on click close button', () => {
    photoDetailModalShallow.find('.close').first().simulate('click')
    expect(onClosePhotoDetailMock).toHaveBeenCalled()
  })
})
