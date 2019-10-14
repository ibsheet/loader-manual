import React from 'react'
import classnames from 'classnames'
import get from 'lodash/get'

// primary, secondary, success, info, warning, danger
const DEFAULT_STYLE = 'secondary'

export class Badge extends React.Component {
  constructor (props) {
    super(props)
    return this
  }
  render () {
    const style = get(this.props, 'style', DEFAULT_STYLE)
    const classes = get(this.props, 'class')
    const children = this.props.children
    return (
      <span
        className={classnames(`badge badge--${style}`, classes)}
        style={{ fontSize: '.7rem' }}
      >
        {children}
      </span>
    )
  }
}

export class BadgeGroup extends React.Component {
  constructor (props) {
    super(props)
    return this
  }
  render () {
    // const style = get(this.props, 'style', DEFAULT_STYLE)
    const children = this.props.children
    return (
      <div className={'badge-group'}>
        {children}
      </div>
    )
  }
}
