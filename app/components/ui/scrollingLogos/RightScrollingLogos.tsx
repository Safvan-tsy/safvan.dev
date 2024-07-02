import React from 'react';
import Image from 'next/image';
import nodejs from '../../../assets/tech/nodejs.svg';
import yarn from '../../../assets/tech/yarn.svg';
import npm from '../../../assets/tech/npm.svg';
import apache from '../../../assets/tech/apache.svg';
import docker from '../../../assets/tech/docker.svg';
import express from '../../../assets/tech/express.svg';
import git from '../../../assets/tech/git.svg';
import jenkins from '../../../assets/tech/jenkins.svg';
import nestjs from '../../../assets/tech/nestjs.svg';
import linux from '../../../assets/tech/linux.svg';
import postgres from '../../../assets/tech/postgresql.svg';
import mongo from '../../../assets/tech/mongodb.svg';
import jest from '../../../assets/tech/jest.svg';
import vitest from '../../../assets/tech/vitest.svg';

const techLogos = [
  nodejs,
  yarn,
  git,
  npm,
  apache,
  docker,
  vitest,
  jest,
  express,
  nestjs,
  linux,
  postgres,
  mongo,
];

const RightScrollingLogos = () => {
  const renderTechLogos = () => {
    return techLogos.map((logo, index) => (
      <Image
        key={index}
        loading="lazy"
        src={logo}
        className="h-10 w-10 max-w-none md:h-16 md:w-16 lg:h-20 lg:w-20"
        alt={`Image ${index + 1}`}
      />
    ));
  };

  return (
    <div className="group flex overflow-hidden sm:space-x-4  lg:space-x-10">
      <div className="group-hover:paused flex animate-loop-scroll-right space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
        {renderTechLogos()}
      </div>
      <div
        className="group-hover:paused flex animate-loop-scroll-right space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10"
        aria-hidden="true"
      >
        {renderTechLogos()}
      </div>
    </div>
  );
};

export default RightScrollingLogos;
