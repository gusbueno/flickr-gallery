'use strict'

/* global describe, it, expect */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import PhotoDetail from '../../src/js/containers/photoDetail/PhotoDetail'

const storeFake = {
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => {
    return {
      photoDetail: {
        showModal: true,
        photo: {
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
      }
    }
  }
}

describe('<PhotoDetail /> container', () => {
  it('should match with the snapshot', () => {
    const tree = renderer.create(
      <Provider store={storeFake}>
        <PhotoDetail />
      </Provider>
    )
    const json = tree.toJSON()
    expect(json).toMatchSnapshot()
  })

  const photoDetailShallow = shallow(
    <Provider store={storeFake}>
      <PhotoDetail />
    </Provider>
  )

  it('should exists', () => {
    expect(photoDetailShallow.length).toEqual(1)
  })
})
