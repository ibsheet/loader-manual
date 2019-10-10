import React from 'react'
// import classnames from 'classnames'
import get from 'lodash/get'

const DEFAULT_STYLE = 'primary'

export class Badge extends React.Component {
  constructor (props) {
    super(props)
    return this
  }

  render () {
    const style = get(this.props, 'style', DEFAULT_STYLE)
    const children = this.props.children
    return (
      <span
        className={`badge badge--${style}`}
        style={{ fontSize: '.7rem' }}
      >
        {children}
      </span>
    )
  }
}
