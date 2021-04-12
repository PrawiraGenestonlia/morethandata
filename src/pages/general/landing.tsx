import Layout from '@components/layout';
import ThemeButton, { useTheme } from '@components/themeButton';
import Logo from '@assets/MoreThanDataLogo/logo.svg';
import { Link } from 'react-router-dom';
import FSLight from '@assets/FullStack/FSLight.png';
import FSDark from '@assets/FullStack/FSDark.png';
import Data from '@assets/FullStack/Data.png';
import WiraAvatar from '@assets/Personal/wira.jpeg';
import { useRef } from 'react';

interface IComponentProps {

}

const Component = (props: IComponentProps) => {
  const [theme,] = useTheme();
  const aboutRef = useRef<HTMLDivElement | null>(null);

  return (
    <Layout fade padding flex footer>
      {/* section */}
      <div>
        <div className="flex flex-row border-b border-gray-300 dark:border-gray-600 pb-6">
          <div className="w-full flex justify-end text-lg sm:text-xl md:text-2xl items-center">
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
      <div className="py-12 ">
        <div className="max-w-9xl mx-auto lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-mtd-300 dark:text-mtd-200 font-semibold tracking-wide uppercase">WHY MORETHANDATA?</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
              Unique perspective to bring data alive
              </p>
            <p className="mt-4 max-w-5xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Data visualisation has been outdated due to business use case. It has always been limited to common charts.
              more<span className="text-mtd-200">than</span>data would like to bring a fresh perspective of what data should look like for non-business use-case.
            </p>
            <div className="mt-6"><img className="w-full object-contain max-h-96" alt="data" src={Data} /></div>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="py-12 ">
        <div className="max-w-9xl mx-auto lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-mtd-300 dark:text-mtd-200 font-semibold tracking-wide uppercase">FEATURE</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
              Built with modern tech-stack
              </p>
            <p className="mt-4 max-w-5xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              This site serves more than just data-visualisation. It is open-source, allowing everyone to learn and reference the code-base. This site is built on React (UI), Tailwindcss (Utility-CSS), and d3 (visualisation). Some may claim that the tech-stack stack is overkill, but really... it has very decent boilerplate!
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
              <div className="mt-8 flex flex-col items-center justify-center">
                <div className="my-3 lg:my-12"><ThemeButton /></div>
                <div className="mt-2 text-xl font-bold">Dark-Mode Enabled</div>
              </div>
              <div className="mt-8 flex flex-col items-center justify-center">
                <svg className="w-32 h-32 fill-current text-gray-700 dark:text-mtd-300 transition-colors duration-500" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><g><path d="M64,400H40a8,8,0,0,0,0,16H64a8,8,0,0,0,0-16Z" /><path d="M96,400H88a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z" /><path d="M472,168H456V104a32.042,32.042,0,0,0-32-32H88a32.036,32.036,0,0,0-32,32V248H40A32.036,32.036,0,0,0,8,280V408a32.036,32.036,0,0,0,32,32h80a32.042,32.042,0,0,0,32-32V384h69.75l-4,16H192a8,8,0,0,0-8,8v24a8,8,0,0,0,8,8H472a32.042,32.042,0,0,0,32-32V200A32.042,32.042,0,0,0,472,168ZM136,408a16.021,16.021,0,0,1-16,16H40a16.021,16.021,0,0,1-16-16V280a16.021,16.021,0,0,1,16-16H50.23l6.18,18.53A8,8,0,0,0,64,288H96a8,8,0,0,0,7.59-5.47L109.77,264H120a16.021,16.021,0,0,1,16,16ZM67.1,264H92.9l-2.67,8H69.77ZM152,368V344H296v24Zm144,16v16h-1.75l-4-16Zm-18.25,16h-43.5l4-16h35.5ZM200,424v-8h97.01a31.971,31.971,0,0,0,3.3,8Zm96-224V328H152V280a32.042,32.042,0,0,0-32-32H72V104A16.021,16.021,0,0,1,88,88H424a16.021,16.021,0,0,1,16,16v64H328A32.042,32.042,0,0,0,296,200ZM488,408a16.021,16.021,0,0,1-16,16H328a16.021,16.021,0,0,1-16-16V200a16.021,16.021,0,0,1,16-16H472a16.021,16.021,0,0,1,16,16Z" /><path d="M472,192H328a8,8,0,0,0-8,8V384a8,8,0,0,0,8,8H472a8,8,0,0,0,8-8V200A8,8,0,0,0,472,192Zm-8,184H336V208H464Z" /><circle cx="392" cy="408" r="8" /></g></svg>
                <div className="mt-2 text-xl font-bold">Responsive</div>

              </div>
              <div className="mt-8 flex flex-col items-center justify-center">
                <svg className="w-32 h-32 fill-current text-gray-700 dark:text-mtd-300 transition-colors duration-500" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Database-cloud-laptop-computer-smartphone"><path d="m41 21h-18a1 1 0 0 0 -1 1v24a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-24a1 1 0 0 0 -1-1zm-1 24h-16v-6h16zm0-8h-16v-6h16zm0-8h-16v-6h16z" /><path d="m59 2h-14a3.009 3.009 0 0 0 -3 3v8a3.009 3.009 0 0 0 3 3h4v2h-2v2h10v-2h-2v-2h4a3.009 3.009 0 0 0 3-3v-8a3.009 3.009 0 0 0 -3-3zm-6 16h-2v-2h2zm7-5a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1-1v-1h16zm0-3h-16v-5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z" /><path d="m61 56v-7a3.009 3.009 0 0 0 -3-3h-12a3.009 3.009 0 0 0 -3 3v7a1 1 0 0 0 -1 1v2a3.009 3.009 0 0 0 3 3h14a3.009 3.009 0 0 0 3-3v-2a1 1 0 0 0 -1-1zm-16-7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7h-14zm15 10a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1-1v-1h16z" /><path d="m17 48h-1v-1a3.009 3.009 0 0 0 -3-3h-8a3.009 3.009 0 0 0 -3 3v12a3.009 3.009 0 0 0 3 3h12a3.009 3.009 0 0 0 3-3v-8a3.009 3.009 0 0 0 -3-3zm-6.82 12h-5.18a1 1 0 0 1 -1-1v-12a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h-1a3.009 3.009 0 0 0 -3 3v8a3 3 0 0 0 .18 1zm7.82-1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" /><path d="m23.92 8.08a4.985 4.985 0 0 0 -6.3-3.88 5.916 5.916 0 0 0 -4.62-2.2 6.024 6.024 0 0 0 -5.67 4.04 6 6 0 0 0 .67 11.96h15a5 5 0 0 0 .92-9.92zm-.92 7.92h-15a4.006 4.006 0 0 1 -.09-8.01.777.777 0 0 0 .16.02 1.009 1.009 0 0 0 1.01-.8 3.99 3.99 0 0 1 7.33-1.28.981.981 0 0 0 1.29.38 2.977 2.977 0 0 1 4.3 2.69 1 1 0 0 0 1 1 3 3 0 0 1 0 6z" /><path d="m26 25h2v2h-2z" /><path d="m31 25h2v2h-2z" /><path d="m36 25h2v2h-2z" /><path d="m26 33h2v2h-2z" /><path d="m31 33h2v2h-2z" /><path d="m36 33h2v2h-2z" /><path d="m26 41h2v2h-2z" /><path d="m31 41h2v2h-2z" /><path d="m36 41h2v2h-2z" /><path d="m53 29v-7h-2v6h-7v2h8a1 1 0 0 0 1-1z" /><path d="m44 36h7v8h2v-9a1 1 0 0 0 -1-1h-8z" /><path d="m13 20h-2v9a1 1 0 0 0 1 1h8v-2h-7z" /><path d="m11 35v7h2v-6h7v-2h-8a1 1 0 0 0 -1 1z" /></g></svg>                <div className="mt-2 text-xl font-bold">Data-Driven</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="py-12" ref={aboutRef}>
        <div className="max-w-9xl mx-auto lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-mtd-300 dark:text-mtd-200 font-semibold tracking-wide uppercase">ABOUT ME</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
              Prawira Genestonlia
            </p>
            <p className="mt-4 max-w-5xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              I am <span className="font-bold">Wira</span>, a current full-stack software developer in TechFin industry.
              Being a trained Engineer and Economist, I am putting all the data-analysis knowledge into a single domain and visualise it.
              I hope to be able to share interesting finding with everyone.
            </p>
          </div>
          <div className="mt-8 w-full flex justify-center"><img className="w-48 h-full object-contain max-w-xs border-2  rounded-full dark:border-mtd-400 border-gray-800 shadow-2xl" src={WiraAvatar} alt="wira" /></div>
          <div className="w-full flex justify-center"><img className="w-full h-full object-contain max-w-3xl" src={theme === 'dark' ? FSDark : FSLight} alt="full-stack dev" /></div>
        </div>

      </div>
    </Layout>

  )
}

export default Component;