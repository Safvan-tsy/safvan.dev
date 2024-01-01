import * as React from 'react'
import styles from './TechStack.module.scss'
import ScrollingLogos from '../../ui/scrollingLogos/ScrollingLogos'
import RightScrollingLogos from '../../ui/scrollingLogos/RightScrollingLogos'

const TechStack = () => {
  return (
    <div className={styles.techStack}>
      <div className={styles.headingGroup}>
        <p className={styles.mainHeading}>My Tech Stack</p>
        <p className={styles.subHeading}>Technologies I have been working with recently</p>
      </div>
      <div className={styles.logoGroup}>
        <ScrollingLogos />
        <RightScrollingLogos />
      </div>
    </div>
  )
}

export default TechStack