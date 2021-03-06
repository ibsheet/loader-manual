import React from 'react'
import get from 'lodash/get'

const DEFAULT_COLOR = '#787878'
const DEFAULT_BGCOLOR = '#FEFC79'

export class Highlight extends React.Component {
  constructor (props) {
    super(props)
    return this
  }

  render () {
    const color = get(this.props, 'color', DEFAULT_COLOR)
    const bgColor = get(this.props, 'bgColor', DEFAULT_BGCOLOR)
    const children = this.props.children
    return (
      <span
        style={{
          color,
          backgroundColor: bgColor
          // fontWeight: 'bolder'
        }}
      >
        {children}
      </span>
    )
  }
}
