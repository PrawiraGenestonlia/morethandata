import Layout from '@components/layout';
import ThemeButton from '@components/themeButton';
import Logo from '@assets/MoreThanDataLogo/logo.svg';
import { Link } from 'react-router-dom';
import { useTheme } from '@components/themeButton';
import FSLight from '@assets/FullStack/FSLight.png';
import FSDark from '@assets/FullStack/FSDark.png';
import { useRef } from 'react';

interface IComponentProps {

}

const Component = (props: IComponentProps) => {
  const [theme,] = useTheme();
  const aboutRef = useRef<HTMLDivElement | null>(null);

  return (
    <Layout>
      <div className="w-full h-full p-8 flex flex-col flex-grow">
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
        <div className="relative h-full">
          <div className="w-full h-full absolute t-0 bg-mtd-logo bg-no-repeat bg-right bg-contain bg-opacity-25 opacity-10">&#8203;</div>
          <div>Cool Visualisation Animation</div>
        </div>
        <div>Quotes</div>
        <div>New Section - About Me</div>

        <div className="flex flex-row w-full justify-center" ref={aboutRef}>
          <div className="text-center border-b-2 border-gray-300 dark:border-gray-600 p-4 text-lg sm:text-2xl lg:text-3xl font-bold" style={{ width: '50%' }}>About Me</div>
        </div>
        <div className="mt-4">I live in Singapore and work as a full-stack developer in fintech industry</div>
        <div className="mt-4 w-full flex justify-center"><img className="w-full" style={{ maxWidth: '50rem' }} src={theme === 'dark' ? FSDark : FSLight} alt="full-stack dev" /></div>

        <div className="mt-4">Education, Interest (TechStack), Software Developer in World Class Financial Institution</div>
        <div>Footer in Layout</div>

      </div>
    </Layout>

  )
}

export default Component;