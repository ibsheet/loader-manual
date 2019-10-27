import React from 'react'
import classnames from 'classnames'
import { withBaseUrl } from '../../shared'
import styles from '../styles.module.css'

const features = [
  {
    title: <>JavaScript Modules</>,
    imageUrl: 'img/features/icons8-module-1.png',
    description: (
      <>
        UMD, CommonJS, ESModule 형식을 모두 지원합니다.
      </>
    )
  },
  {
    title: <>Browser</>,
    imageUrl: 'img/features/browsers-1024x1024.png',
    description: (
      <>
        웹브라우저 환경에서도 쉽게 적용할 수 있습니다.
      </>
    )
  },
  {
    title: <>SPA Component <small className='text--info'><i>(upcoming)</i></small></>,
    // imageUrl: 'img/features/undraw_JavaScript_frameworks_8qpc.svg',
    imageUrl: 'img/features/1_7zccGWE4o5LmxegijjK_xQ.png',
    description: (
      <>
        Angular, React, Vue Framework 전용 컴포넌트를 제공합니다.
      </>
    )
  }
]

class Features extends React.Component {
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

export default Features
