import * as React from 'react'
import styles from './TechStack.module.scss'
import ScrollingLogos from '../ui/scrollingLogos/ScrollingLogos'

const TechStack = () => {
  return (
    <div className={styles.techStack}>
      <div className={styles.headingGroup}>
        <p className={styles.techStackHeading}>My Tech Stack</p>
        <p>Technologies I have been working with recently</p>
      </div>
      <div className={styles.logoGroup}>
        <ScrollingLogos/>
      </div>
      </div>
  )
}

export default TechStack