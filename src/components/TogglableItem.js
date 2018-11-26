import React from 'react'

class TogglableItem extends React.Component {
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