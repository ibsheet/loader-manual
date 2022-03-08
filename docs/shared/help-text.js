import React from 'react'
import get from 'lodash/get'

const DEFAULT_COLOR = '#787878'

export class HelpText extends React.Component {
  constructor (props) {
    super(props)
    return this
  }

  render () {
    const color = get(this.props, 'color', DEFAULT_COLOR)
    const children = this.props.children
    return (
      <span
        style={{
          color,
          // fontStyle: 'italic',
          fontSize: '.9em',
          // padding: '0.2rem'
        }}
      >
        {children}
      </span>
    )
  }
}
