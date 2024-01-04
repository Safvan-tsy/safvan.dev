import React from 'react'

const Experience = () => {
  return (
    <div className='mt-4 flex justify-center flex-wrap items-center flex-col lg:mt-6 lg:mb-4 lg:mx-8 
    xl:mt-10 xl:mb-8 xl:mx-20'>
      <h2 className='text-gray-100 mt-2 text-2xl font-inter tracking-wide
                md:text-3xl xl:text-4xl'>
        Experience
      </h2>
      <div className=''>
        <div className='m-2 p-2 flex flex-col md:flex-row border-b-2 border-gray-600'>
          <div className='md:w-[30%]'>
            <div>
              <h2 className='text-semibold tracking-wider'>
                Unfold Solution
              </h2>
              <p className='text-sm text-gray-400'>1 yr 1 mo</p>
              <p className='text-sm text-gray-400'>Remote - Melbourne, Australia</p>
            </div>
            <div className='p-2'>
              <ul>
                <li>
                  <div>
                    <h3 className=''>Software Engineer</h3>
                    <span className='text-sm text-gray-400'>Dec 2023 - Present</span>
                  </div>
                </li>
                <li className=''>
                  <div className='relative'>
                    {/* content: "";
                    position: absolute;
                    left: calc(-3.2rem - 2px / 2);
                    top: calc(calc(1.2rem + 0.8rem) + 0.8rem + 0.8rem);
                    height: calc(100% - (2 * 1.2rem));
                    width: 2px;
                    background-color: var(--color-border-faint); */}
                    <h3>Junior Software Engineer</h3>
                    <span className='text-sm text-gray-400'>May 2023 - Nov 2023</span>
                    <div className="absolute left-[calc(-3.2rem-1px)] top-[calc(calc(1.2rem+0.8rem)+0.8rem+0.8rem)] 
                  h-[calc(100%-2*(1.2rem))] w-2 bg-gray-400"></div>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Trainee Developer</h3>
                    <span className='text-sm text-gray-400'>Jan 2023 - April 2023</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='md:w-[70%]'>
            <p className='flex flex-wrap text-[--paragraph-font] font-inter tracking-wide text-md 
                    lg:text-[18px] '>
              Engaged in executing studies, trial runs with users, brainstorming, sketching blueprints,
              and crafting refined user experiences and user interfaces for iOS, Android, and the Web.
              Closely partnering with engineers, product supervisors, and important personnel. Designing
              experiences that are guided by data and centered on the user.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience