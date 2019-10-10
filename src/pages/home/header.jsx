import React from 'react'
import classnames from 'classnames'
import Link from '@docusaurus/Link'
import { withBaseUrl } from '../../shared'
import styles from '../styles.module.css'

class Header extends React.Component {
  constructor (props) {
    super(props)
    return this
  }
  
  render () {
    const { title, tagline } = this.props
    return (
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{title}</h1>
          <p className='hero__subtitle'>{tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted
              )}
              to={withBaseUrl('docs/basic/getting-started')}
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export { Header }
export default Header
