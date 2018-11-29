import React from 'react'
import { shallow, mount } from 'enzyme'
jest.mock('./services/blogs')
import blogService from './services/blogs'
import App from './App'

describe('when user is not logged', () => {
  let appComponent

  beforeEach(() => {
    localStorage.clear()
    appComponent = shallow(<App />)
  })

  it('only login form is rendered', () => {
    appComponent.update()
    expect(appComponent.exists('.login')).toBe(true)
    expect(appComponent.exists('.blogs')).toBe(false)
  })
})

describe('when user is logged', () => {
  const user = {
    username: 'tester',
    token: '1231231214',
    name: 'Teuvo Testaaja'
  }

  let appComponent

  beforeEach(() => {
    localStorage.setItem('loggedInBlogUser', JSON.stringify(user))
    appComponent = mount(<App />)
  })

  it('all notes are rendered', () => {
    appComponent.update()
    expect(appComponent.exists('.login')).toBe(false)
    expect(appComponent.exists('.blogs')).toBe(true)
  })
})
