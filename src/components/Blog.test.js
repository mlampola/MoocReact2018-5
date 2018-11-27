import React from 'react'
import { shallow, mount } from 'enzyme'
import Blog from './Blog'

describe.only('<Blog />', () => {
  const blog = {
    title: 'Tilintarkastus eilen, tänään ja huomenna',
    author: 'P.K.',
    url: 'http://google.fi',
    likes: 0
  }

  let blogComponent

  beforeEach(() => {
    blogComponent = mount(<Blog blog={blog} />)
  })

  it('the details are hidden by default', () => {
    const detailsDiv = blogComponent.find('.details')
    expect(detailsDiv.getElement().props.style).toEqual({ display: 'none' })
  })

  it('after clicking name the details are displayed', () => {
    // haetaan klikattava osa komponentista
    const nameDiv = blogComponent.find('.clickable')
    nameDiv.simulate('click')

    // haetaan tarkastettava, eli detaljit sisältävä osa komponentista
    const detailsDiv = blogComponent.find('.details')
    expect(detailsDiv.getElement().props.style).toEqual({ display: '' })
  })
})