import React from 'react'
import classnames from 'classnames'

import { withBaseUrl } from '../../shared'

import styles from '../styles.module.css'

const { Component } = React

const features = [
  {
    title: <>JavaScript Modules</>,
    imageUrl: 'img/features/es6-es8-x512.jpg',
    description: (
      <>
        UMD, CommonJS, ESModule 형식을 모두 지원합니다.
      </>
    )
  },
  {
    title: <>Browser</>,
    imageUrl: 'img/features/browsers-1024x1024.png',
    // imageUrl: 'img/features/intro-web-browsers.jpg',
    description: (
      <>
        웹브라우저 환경에서도 쉽게 적용할 수 있습니다.
      </>
    )
  },
  {
    title: <>SPA Component <small className='text--info'><i>(comming soon)</i></small></>,
    imageUrl: 'img/features/undraw_JavaScript_frameworks_8qpc.svg',
    description: (
      <>
        Angular, React, Vue Framework 전용 컴포넌트를 제공합니다.
      </>
    )
  }
]

class Features extends Component {
  constructor (props) {
    super(props)
    return this
  }

  render () {
    return (
      <div className='features-wrapper'>
        {features && features.length && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.feature)}
                  >
                    {imageUrl && (
                      <div className='text--center'>
                        <img
                          className={styles.featureImage}
                          src={withBaseUrl(imageUrl)}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    )
  }
}

// function Welcome (props) {
//   return <h1>Hello, {props.name}</h1>;
// }

export {
  // Welcome,
  Features
}
export default Features
