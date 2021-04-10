import { HTMLProps } from 'react';
import { Fade } from 'react-awesome-reveal';
interface IComponentProps extends HTMLProps<HTMLDivElement> {
  fade?: boolean,
  padding?: boolean,
  flex?: boolean
}

const Component = (props: IComponentProps) => {
  return (
    <div className={`w-screen h-screen text-xl font-body 
          text-black bg-white dark:text-white dark:bg-customNavy 
          ${props.padding && 'p-8 '}
          ${props.flex && 'flex flex-col flex-grow '}`}>
      {props.fade ? <Fade cascade triggerOnce>{props.children}</Fade> : <>{props.children}</>}
    </div>
  )
}

export default Component;