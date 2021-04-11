import { HTMLProps } from 'react';
import { Fade } from 'react-awesome-reveal';
import Logo from '@assets/MoreThanDataLogo/logo.svg';

interface IComponentProps extends HTMLProps<HTMLDivElement> {
  fade?: boolean,
  padding?: boolean,
  flex?: boolean,
  footer?: boolean
}

const Component = (props: IComponentProps) => {
  return (
    <div className="w-full h-full">
      <div className={`w-full h-full text-xl font-body 
          text-black bg-white dark:text-white dark:bg-navy-100 
          ${props.padding && 'p-8 '}
          ${props.flex && 'flex flex-col flex-grow '}`}>
        {props.fade ? <Fade cascade triggerOnce>{props.children}</Fade> : <>{props.children}</>}
      </div>
      {
        props.footer ?
          <div className="p-8 bg-gray-100 dark:bg-navy-200">
            <div className="flex flex-row border-b border-gray-300 dark:border-gray-600 pb-6" />
            <div className="mt-6 text-3xl select-none flex flex-row items-center">
              <img className="w-10 h-10 mr-3" src={Logo} alt="more than data" />more<span className="text-mtd-200">than</span>data
            </div>
          </div> : <></>
      }
    </div>
  )
}

export default Component;