import { useEffect } from 'react';
import { useDispatch, useCustomSelector, REDUCER_TYPES, themeActions } from '@react-redux-helper';

export const useTheme = (): [string, () => void] => {
  const dispatch = useDispatch();
  const { theme } = useCustomSelector<REDUCER_TYPES['theme']>('theme');
  const toggleTheme = () => dispatch(themeActions.toggleTheme(theme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    document.getElementsByTagName('html')[0].className = theme;
  }, [theme]);

  return [theme, toggleTheme];
}

const Component = ({ classic }: { classic?: boolean }) => {
  const [theme, toggleTheme] = useTheme();

  const onClickModernToggle = () => {
    toggleTheme();
  }

  if (classic) {
    return (
      <div className="relative">
        {
          theme === 'dark' ?
            <div onClick={toggleTheme}>
              <svg className="cursor-pointer fill-current text-white hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <path transform="scale(1.2,1.2)" d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-1.989c-.003-1.858.87-3.389 1.721-4.867.761-1.325 1.482-2.577 1.482-3.932 0-2.592-2.075-3.772-4.003-3.772-1.925 0-3.997 1.18-3.997 3.772 0 1.355.721 2.607 1.482 3.932.851 1.478 1.725 3.009 1.72 4.867h-1.988c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z" />
              </svg>
            </div>
            :
            <div onClick={toggleTheme}>
              <svg className="cursor-pointer fill-current text-black hover:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <path transform="scale(1.2,1.2)" d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-5.572c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z" />
              </svg>
            </div>
        }
      </div>
    )
  }
  return (
    <div className="relative grid">
      <div className="flex items-center space-x-4">
        <svg width="32" height="32" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M16 2a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0V3.4A1.4 1.4 0 0116 2zM6.1 6.1a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 11-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm19.8 0a1.4 1.4 0 010 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99a1.4 1.4 0 011.98 0zM9 16a7 7 0 1114 0 7 7 0 01-14 0zm-7 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8H3.4A1.4 1.4 0 012 16zm23.8 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8h-1.4a1.4 1.4 0 01-1.4-1.4zm-2.87 6.93a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 01-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm-15.84 0a1.4 1.4 0 011.98 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99zM16 25.8a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0v-1.4a1.4 1.4 0 011.4-1.4z" fill="url(#paint0_linear)"></path>
          <defs>
            <linearGradient id="paint0_linear" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
              <stop className="transition-all duration-200" stopColor="#FACC15"></stop><stop className="transition-all duration-200" offset="1" stopColor="#FA9D16"></stop>
            </linearGradient>
          </defs>
        </svg>
        <button onClick={onClickModernToggle} id="headlessui-switch-3" role="switch" tabIndex={0} className="inline-flex items-center px-0.5 rounded-full w-18 h-9 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-gray-500 focus:outline-none w-16" aria-checked="false" style={{ backgroundColor: "rgb(96, 211, 96)" }}>
          <span className="sr-only">Enable dark mode</span><span className="bg-white rounded-full w-8 h-8" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 5px, rgba(0, 0, 0, 0.1) 0px 1px 1px', transformOrigin: '50% 50% 0px' }}></span>
        </button>
        <svg width="24" height="24" fill="currentColor" className="transition-colors duration-200 text-gray-300">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Component;