import React from 'react'
import Image from 'next/image';
import nodejs from '../../../assets/tech/nodejs.svg'
import yarn from '../../../assets/tech/yarn.svg'
import npm from '../../../assets/tech/npm.svg'
import apache from '../../../assets/tech/apache.svg'
import docker from '../../../assets/tech/docker.svg'
import express from '../../../assets/tech/express.svg'
import git from '../../../assets/tech/git.svg'
import jenkins from '../../../assets/tech/jenkins.svg'
import nestjs from '../../../assets/tech/nestjs.svg'
import linux from '../../../assets/tech/linux.svg'
import postgres from '../../../assets/tech/postgresql.svg'
import mongo from '../../../assets/tech/mongodb.svg'

const RightScrollingLogos = () => {
  return (

    <div className="flex overflow-hidden space-x-16 group">
      <div className="flex space-x-16 animate-loop-scroll-right group-hover:paused">
        <Image loading="lazy" src={jenkins} className="max-w-none" alt="Image 25" />
        <Image loading="lazy" src={nestjs} className="max-w-none" alt="Image 24" />
        <Image loading="lazy" src={express} className="max-w-none" alt="Image 23" />
        <Image loading="lazy" src={linux} className="max-w-none" alt="Image 22" />
        <Image loading="lazy" src={nodejs} className="max-w-none" alt="Image 21" />
        <Image loading="lazy" src={mongo} className="max-w-none" alt="Image 20" />
        <Image loading="lazy" src={postgres} className="max-w-none" alt="Image 19" />
        <Image loading="lazy" src={git} className="max-w-none" alt="Image 18" />
        <Image loading="lazy" src={apache} className="max-w-none" alt="Image 17" />
        <Image loading="lazy" src={yarn} className="max-w-none" alt="Image 16" />
        <Image loading="lazy" src={npm} className="max-w-none" alt="Image 15" />
        <Image loading="lazy" src={docker} className="max-w-none" alt="Image 14" />
      </div>
      <div className="flex space-x-16 animate-loop-scroll-right group-hover:paused"  aria-hidden="true">
        <Image loading="lazy" src={jenkins} className="max-w-none" alt="Image 25" />
        <Image loading="lazy" src={nestjs} className="max-w-none" alt="Image 24" />
        <Image loading="lazy" src={express} className="max-w-none" alt="Image 23" />
        <Image loading="lazy" src={linux} className="max-w-none" alt="Image 22" />
        <Image loading="lazy" src={nodejs} className="max-w-none" alt="Image 21" />
        <Image loading="lazy" src={mongo} className="max-w-none" alt="Image 20" />
        <Image loading="lazy" src={postgres} className="max-w-none" alt="Image 19" />
        <Image loading="lazy" src={git} className="max-w-none" alt="Image 18" />
        <Image loading="lazy" src={apache} className="max-w-none" alt="Image 17" />
        <Image loading="lazy" src={yarn} className="max-w-none" alt="Image 16" />
        <Image loading="lazy" src={npm} className="max-w-none" alt="Image 15" />
        <Image loading="lazy" src={docker} className="max-w-none" alt="Image 14" />
      </div>
    </div>
  )
}

export default RightScrollingLogos