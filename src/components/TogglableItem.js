import React from 'react'
import PropTypes from 'prop-types'

class TogglableItem extends React.Component {
  static propTypes = {
    clickableText: PropTypes.string.isRequired
  }
  
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    return (
      <div>
        <div onClick={this.toggleVisibility}>
          {this.props.clickableText}
        </div>
        <div style={showWhenVisible}>
          {this.props.children}
        </div>
      </div >
    )
  }
}

export default TogglableItem