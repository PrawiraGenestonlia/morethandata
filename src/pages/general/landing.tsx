import Layout from '@components/layout';
import ThemeButton, { useTheme } from '@components/themeButton';
import Logo from '@assets/MoreThanDataLogo/logo.svg';
import { Link } from 'react-router-dom';
import FSLight from '@assets/FullStack/FSLight.png';
import FSDark from '@assets/FullStack/FSDark.png';
import WiraAvatar from '@assets/Personal/wira.jpeg';
import { useEffect, useRef } from 'react';

interface IComponentProps {

}

const Component = (props: IComponentProps) => {
  const [theme,] = useTheme();
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(aboutRef)
  }, [aboutRef])

  return (
    <Layout fade padding flex footer>
      {/* section */}
      <div>
        <div className="flex flex-row border-b border-gray-300 dark:border-gray-600 pb-6">
          <div className="w-full flex justify-end text-lg items-center">
            <div className="cursor-pointer mr-6 hover:text-gray-500"><Link to="/app/home">Explore</Link></div>
            <div className="cursor-pointer mr-6 hover:text-gray-500 flex justify-center">
              <a href="https://github.com/PrawiraGenestonlia/morethandata" target="_blank" rel="noreferrer"><svg className="cursor-pointer fill-current" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path transform="scale(1.2,1.2)" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
            </div>
            <ThemeButton />
          </div>
        </div>
        <div className="mt-24 text-2xl select-none flex flex-row items-center"><img className="w-10 h-10 mr-3" src={Logo} alt="more than data" />more<span className="text-mtd-200">than</span>data</div>
        <div className="mt-4 text-2xl sm:text-6xl lg:text-7xl font-bold">Bring life to data through unique visualisation.</div>
        <div className="mt-16 flex flex-row justify-center">
          <div className="cursor-help animate-bounce rounded-full border-2 p-5 border-gray-800 dark:border-gray-200" onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            <svg className=" w-6 h-6 text-amber-900 justify-center" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="relative h-full">
        <div className="w-full h-full absolute t-0 bg-mtd-logo bg-no-repeat bg-right bg-contain bg-opacity-25 opacity-10">&#8203;</div>
        <div className="mt-6">[TODO-ADD] Cool Visualisation Animation</div>
      </div>


      {/* section */}
      <div className="py-12 ">
        <div className="max-w-7xl mx-auto lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-mtd-300 dark:text-mtd-200 font-semibold tracking-wide uppercase">WHY MORETHANDATA?</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
              Unique Perspective to bring data alive
              </p>
            <p className="mt-4 max-w-5xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Data visualisation has been outdated due to business use case. It has always been limited to common charts.
              more<span className="text-mtd-200">than</span>data would like to bring a fresh perspective of what data should look like for non-business use-case.
            </p>
            <div className="mt-6">[TODO-ADD] Viz Graphics</div>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="py-12" ref={(ref) => console.log(ref)}>
        <div className="max-w-9xl mx-auto lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-mtd-300 dark:text-mtd-200 font-semibold tracking-wide uppercase">ABOUT ME</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
              Prawira Genestonlia
              </p>
            <p className="mt-4 max-w-5xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">I am a technology enthusiast, currently working as a full-stack developer in TechFin Industry. </p>
          </div>

          <div className="mt-8 w-full flex justify-center"><img className="w-48 h-full object-contain max-w-xs border-2  rounded-full dark:border-mtd-400 border-gray-800 shadow-2xl" src={WiraAvatar} alt="wira" /></div>
          <div className="w-full flex justify-center"><img className="w-full h-full object-contain max-w-3xl" src={theme === 'dark' ? FSDark : FSLight} alt="full-stack dev" /></div>


          {/* <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Competitive exchange rates</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">No hidden fees</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Transfers are instant</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Mobile notifications</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>
              </dl>
            </div> */}

        </div>
      </div>
    </Layout>

  )
}

export default Component;