'use strict'

/* global describe, it, expect */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import Gallery from '../../src/js/containers/gallery/Gallery'

const storeFake = {
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => {
    return {
      gallery: {
        page: 1,
        pages: 200,
        photos: [
          {
            title: 'Title',
            farm: 123,
            server: '123',
            id: '123',
            secret: '123',
            owner: '123',
            ownername: 'Pepe'
          }
        ]
      }
    }
  }
}

describe('<Gallery /> container', () => {
  it('should match with the snapshot', () => {
    const tree = renderer.create(
      <Provider store={storeFake}>
        <Gallery />
      </Provider>
    )
    const json = tree.toJSON()
    expect(json).toMatchSnapshot()
  })

  const galleryShallow = shallow(
    <Provider store={storeFake}>
      <Gallery />
    </Provider>
  )

  it('should exists', () => {
    console.log(galleryShallow.instance())
    expect(galleryShallow.length).toEqual(1)
  })
})
