import { HTMLProps } from 'react';

interface IComponentProps extends HTMLProps<HTMLDivElement> {

}

const Component = (props: IComponentProps) => {
  return (
    <div className="w-full h-full">
      {props.children}
    </div>
  )
}

export default Component;