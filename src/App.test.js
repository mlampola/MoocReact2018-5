import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'

describe.only('Inegration tests', () => {
  let appComponent

  beforeEach(() => {
    appComponent = shallow(<App />)
  })

  it('the login screen is displayed in the beginning', () => {
    expect(appComponent.exists('.login')).toBe(true)
    expect(appComponent.exists('.blogs')).toBe(false)
  })
})
