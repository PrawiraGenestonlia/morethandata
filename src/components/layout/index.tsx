import { HTMLProps } from 'react';
import { Fade } from 'react-awesome-reveal';
import Logo from '@assets/MoreThanDataLogo/logo.svg';
import { Link } from 'react-router-dom';
import ThemeButton from '@components/themeButton';

interface IComponentProps extends HTMLProps<HTMLDivElement> {
  fade?: boolean,
  padding?: boolean,
  flex?: boolean,
  footer?: boolean,
  header?: boolean
}

interface IFOOTER_ITEM {
  columnOne: string;
  childrenOne: ({
    item: string;
    href: string;
    link?: undefined;
  } | {
    item: string;
    link: string;
    href?: undefined;
  })[];
  columnTwo: string;
  childrenTwo: ({
    item: string;
    href: string;
    link?: undefined;
  } | {
    item: string;
    link: string;
    href?: undefined;
  })[];
};

const FOOTER_ITEMS: Array<IFOOTER_ITEM> = [
  {
    columnOne: 'components',
    childrenOne: [
      {
        item: 'All',
        link: '/app/components',
      }, {
        item: 'Button',
        link: '/app/components/button',
      }
    ],
    columnTwo: 'contact',
    childrenTwo: [
      {
        item: 'GitHub',
        href: 'https://github.com/PrawiraGenestonlia/morethandata',
      }, {
        item: 'LinkedIn',
        href: 'https://www.linkedin.com/in/prawira-genestonlia/',
      }
    ],
  }
]

const Component = (props: IComponentProps) => {
  return (
    <div className="w-full h-full">
      {/* HEADER */}
      {
        !!props.header &&
        <div className="sticky top-0 z-50 bg-white dark:bg-navy-200 p-3 flex flex-row border-b-2 dark:border-gray-700">
          <div className="flex-grow flex flex-row items-center justify-start">
            <Link to="/"><img className="w-10 h-10 mr-3" src={Logo} alt="more than data" /></Link>
          </div>
          <div className="flex-grow flex flex-row items-center justify-center">

          </div>
          <div className="flex-grow flex flex-row items-center justify-end">
            <div className="cursor-pointer mr-6 hover:text-gray-500 flex justify-center">
              <a href="https://github.com/PrawiraGenestonlia/morethandata" target="_blank" rel="noreferrer"><svg className="cursor-pointer fill-current" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path transform="scale(1.2,1.2)" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
            </div>
            <ThemeButton />
          </div>
        </div>}

      {/* CONTENT */}
      <div className={`w-full h-full text-base font-body 
          text-black bg-white dark:text-white dark:bg-navy-100 
          ${props.padding && 'p-8 '}
          ${props.flex && 'flex flex-col flex-grow '}`}>
        {props.fade ? <Fade cascade triggerOnce>{props.children}</Fade> : <>{props.children}</>}
      </div>
      {
        !!props.footer &&
        <div className="p-8 bg-gray-100 dark:bg-navy-200">
          {
            FOOTER_ITEMS.map((footerItem) => (
              <div className="flex flex-row my-4" key={footerItem.columnOne}>
                <div className="flex flex-col w-1/2">
                  <div className="uppercase font-bold text-gray-600 dark:text-gray-300">{footerItem.columnOne}</div>
                  {
                    footerItem.childrenOne.map(_item => (
                      <div className="mt-2 hover:text-gray-400" key={_item.item}>
                        {!!_item.link && <Link to={_item.link}>{_item.item}</Link>}
                        {!!_item.href && <a href={_item.href} target="_blank" rel="noreferrer">{_item.item}</a>}
                      </div>
                    ))
                  }
                </div>
                <div className="flex flex-col w-1/2">
                  <div className="uppercase font-bold text-gray-600 dark:text-gray-300">{footerItem.columnTwo}</div>
                  {
                    footerItem.childrenTwo.map(_item => (
                      <div className="mt-2 hover:text-gray-400" key={_item.item}>
                        {!!_item.link && <Link to={_item.link}>{_item.item}</Link>}
                        {!!_item.href && <a href={_item.href} target="_blank" rel="noreferrer">{_item.item}</a>}
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }

          {/* FOOTER */}
          <div className="flex flex-row border-b border-gray-300 dark:border-gray-600 pb-6" />
          <div className="mt-6 text-3xl select-none flex flex-row items-center">
            <img className="w-10 h-10 mr-3" src={Logo} alt="more than data" />more<span className="text-mtd-200">than</span>data
            </div>
        </div>
      }
    </div>
  )
}

export default Component;