import { ButtonDoc } from '@components/button';
import { useParams } from 'react-router-dom';
import Layout from '@components/layout';


interface IComponentProps {

}

const Component = (props: IComponentProps) => {
  const { type } = useParams<{ type: string }>();

  const Documentation = (): JSX.Element => {
    switch (type) {
      case 'button': return <ButtonDoc />
      default: return <div>
        All components
      </div>
    }
  }
  return (
    <Layout padding header footer>
      <Documentation />
    </Layout>
  )
}

export default Component;