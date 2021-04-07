import { HTMLProps } from 'react';

interface IComponentProps extends HTMLProps<HTMLDivElement> {

}

const Component = (props: IComponentProps) => {
  return (
    <div className="w-screen h-screen text-black bg-white dark:text-white dark:bg-customNavy">
      {props.children}
    </div>
  )
}

export default Component;