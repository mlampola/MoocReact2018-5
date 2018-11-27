import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
  it('renders title, author and likes', () => {
    const blog = {
      title: 'Tilintarkastus eilen, tänään ja huomenna',
      author: 'P.K.',
      url: 'http://google.fi',
      likes: 0
    }

    const blogComponent = shallow(<SimpleBlog blog={blog} />)
    const titleDiv = blogComponent.find('.title')
    const likesDiv = blogComponent.find('.likes')

    expect(titleDiv.text()).toContain(blog.title)
    expect(titleDiv.text()).toContain(blog.author)
    expect(likesDiv.text()).toContain(`blog has ${blog.likes} likes`)
  })

  it('clicking the button twice calls event handler twice', () => {
    const blog = {
      title: 'Tilintarkastus eilen, tänään ja huomenna',
      author: 'P.K.',
      url: 'http://google.fi',
      likes: 0
    }
  
    const mockHandler = jest.fn()
  
    const blogComponent = shallow(
      <SimpleBlog
        blog={blog}
        onClick={mockHandler}
      />
    )
  
    const button = blogComponent.find('button')
    button.simulate('click')
    button.simulate('click')
  
    expect(mockHandler.mock.calls.length).toBe(2)
  })
})