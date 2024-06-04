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
    title: <>Optimized Usability</>,
    imageUrl: 'img/features/rocket-ship-png-15.png',
    description: (
      <>
        사용에 필요한 API를 최적화했습니다.
      </>
    )
  },
  // {
  //   title: <>SPA Component <small className='text--info'><i>(upcoming)</i></small></>,
  //   // imageUrl: 'img/features/undraw_JavaScript_frameworks_8qpc.svg',
  //   imageUrl: 'img/features/1_7zccGWE4o5LmxegijjK_xQ.png',
  //   description: (
  //     <>
  //       Angular, React, Vue Framework 전용 컴포넌트를 제공합니다.
  //     </>
  //   )
  // }
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
                    className={classnames('col col--6', styles.feature)}
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
                    <h3 className='text--center'>{title}</h3>
                    <p className='text--center'>{description}</p>
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
