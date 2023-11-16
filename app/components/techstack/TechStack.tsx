import * as React from 'react'
import styles from './TechStack.module.scss'
import ScrollingLogos from '../ui/scrollingLogos/ScrollingLogos'
import RightScrollingLogos from '../ui/rightScrolling/RightScrollingLogos'

const TechStack = () => {
  return (
    <div className={styles.techStack}>
      <div className={styles.headingGroup}>
        <p className={styles.techStackHeading}>My Tech Stack</p>
        <p>Technologies I have been working with recently</p>
      </div>
      <div className={styles.logoGroup}>
        <ScrollingLogos/>
        <RightScrollingLogos/>
      </div>
      </div>
  )
}

export default TechStack