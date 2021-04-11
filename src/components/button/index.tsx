interface IComponentProps extends HTMLButtonElement {

}

const Component = (props: IComponentProps) => {
  return (
    <div className="w-full h-full">
      Component
    </div>
  )
}

export const ButtonDoc = () => {
  return (
    <>
      <div className="card bg-gray-200 dark:bg-navy-200 py-3 px-5 rounded-xl flex flex-col mb-5 transition-colors duration-500">
        <div className="title text-xl font-medium">Filled</div>
        <div className="w-full py-3">
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Primary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-500 hover:bg-gray-600 hover:shadow-lg">Secondary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg">Success</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg">Danger</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg">Warning</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-lg">Info</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg">Dark</button>
          </div>
        </div>
      </div>

      <div className="card bg-gray-200 dark:bg-navy-200 py-3 px-5 rounded-xl flex flex-col mb-5 transition-colors duration-500">
        <div className="title text-xl font-medium">Border</div>
        <div className="w-full py-3">
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-50">Primary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-gray-600 text-sm py-2.5 px-5 rounded-md border border-gray-600 hover:bg-gray-50">Secondary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-green-600 text-sm py-2.5 px-5 rounded-md border border-green-600 hover:bg-green-50">Success</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-red-600 text-sm py-2.5 px-5 rounded-md border border-red-600 hover:bg-red-50">Danger</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-yellow-600 text-sm py-2.5 px-5 rounded-md border border-yellow-600 hover:bg-yellow-50">Warning</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-gray-800 text-sm py-2.5 px-5 rounded-md border border-gray-800 hover:bg-gray-200">Dark</button>
          </div>
        </div>
      </div>

      <div className="card bg-gray-200 dark:bg-navy-200 py-3 px-5 rounded-xl flex flex-col mb-5 transition-colors duration-500">
        <div className="title text-xl font-medium">Flat</div>
        <div className="w-full py-3">
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md hover:bg-blue-100">Primary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-gray-600 text-sm py-2.5 px-5 rounded-md hover:bg-gray-100">Secondary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-green-600 text-sm py-2.5 px-5 rounded-md hover:bg-green-100">Success</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-red-600 text-sm py-2.5 px-5 rounded-md hover:bg-red-100">Danger</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-yellow-600 text-sm py-2.5 px-5 rounded-md hover:bg-yellow-100">Warning</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-purple-600 text-sm py-2.5 px-5 rounded-md hover:bg-purple-100">Info</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-gray-900 text-sm py-2.5 px-5 rounded-md hover:bg-gray-200">Dark</button>
          </div>
        </div>
      </div>

      <div className="card bg-gray-200 dark:bg-navy-200 py-3 px-5 rounded-xl flex flex-col mb-5 transition-colors duration-500">
        <div className="title text-xl font-medium">Disabled</div>
        <div className="w-full py-3">
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-300">Primary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-300">Secondary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-300">Success</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-300">Danger</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-yellow-300">Warning</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-300">Info</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-400">Dark</button>
          </div>
        </div>
      </div>

      <div className="card bg-gray-200 dark:bg-navy-200 py-3 px-5 rounded-xl flex flex-col mb-5 transition-colors duration-500">
        <div className="title text-xl font-medium">Gradient</div>
        <div className="w-full py-3">
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 transform hover:scale-110">Primary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-gray-400 to-gray-600 transform hover:scale-110">Secondary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-green-400 to-green-600 transform hover:scale-110">Success</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-red-400 to-red-600 transform hover:scale-110">Danger</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 transform hover:scale-110">Warning</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-purple-400 to-purple-600 transform hover:scale-110">Info</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-gray-600 to-gray-900 transform hover:scale-110">Dark</button>
          </div>
        </div>
      </div>

      <div className="card bg-gray-200 dark:bg-navy-200 py-3 px-5 rounded-xl flex flex-col mb-5 transition-colors duration-500">
        <div className="title text-xl font-medium">Relief</div>
        <div className="w-full py-3">
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-blue-600 rounded-md bg-blue-500 hover:bg-blue-400">Primary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-gray-600 rounded-md bg-gray-500 hover:bg-gray-400">Secondary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-green-600 rounded-md bg-green-500 hover:bg-green-400">Success</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-red-600 rounded-md bg-red-500 hover:bg-red-400">Danger</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-yellow-600 rounded-md bg-yellow-500 hover:bg-yellow-400">Warning</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-purple-600 rounded-md bg-purple-500 hover:bg-purple-400">Info</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-gray-800 rounded-md bg-gray-700 hover:bg-gray-600">Dark</button>
          </div>
        </div>
      </div>

      <div className="card bg-gray-200 dark:bg-navy-200 py-3 px-5 rounded-xl flex flex-col mb-5 transition-colors duration-500">
        <div className="title text-xl font-medium">Round</div>
        <div className="w-full py-3">
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-full border border-blue-600 hover:bg-blue-50">Primary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-gray-600 text-sm py-2.5 px-5 rounded-full border border-gray-600 hover:bg-gray-50">Secondary</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-green-600 text-sm py-2.5 px-5 rounded-full border border-green-600 hover:bg-green-50">Success</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-red-600 text-sm py-2.5 px-5 rounded-full border border-red-600 hover:bg-red-50">Danger</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-yellow-600 text-sm py-2.5 px-5 rounded-full border border-yellow-600 hover:bg-yellow-50">Warning</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-gray-800 text-sm py-2.5 px-5 rounded-full border border-gray-800 hover:bg-gray-200">Dark</button>
          </div>
        </div>
      </div>

      <div className="card bg-gray-200 dark:bg-navy-200 py-3 px-5 rounded-xl flex flex-col mb-5 transition-colors duration-500">
        <div className="title text-xl font-medium">Icon</div>
        <div className="w-full py-3">
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
                        Primary
                    </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-500 hover:bg-gray-600 hover:shadow-lg flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
                        Secondary
                    </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
                        Success
                    </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
              </svg>
                        Danger
                    </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
                        Warning
                    </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-lg flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
                        Info
                    </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
                        Dark
                    </button>
          </div>
        </div>
        <div className="w-full py-3">
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-50 flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
                        Primary
                    </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-gray-600 text-sm py-2.5 px-5 rounded-md border border-gray-600 hover:bg-gray-50 flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
                        Secondary
                    </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-green-600 text-sm py-2.5 px-5 rounded-md border border-green-600 hover:bg-green-50 flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
                        Success
                    </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-red-600 text-sm py-2.5 px-5 rounded-md border border-red-600 hover:bg-red-50 flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
              </svg>
                        Danger
                    </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-yellow-600 text-sm py-2.5 px-5 rounded-md border border-yellow-600 hover:bg-yellow-50 flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
                        Warning
                    </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-purple-600 text-sm py-2.5 px-5 rounded-md border border-purple-600 hover:bg-purple-50 flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
                        Info
                    </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-gray-800 text-sm py-2.5 px-5 rounded-md border border-gray-800 hover:bg-gray-200 flex items-center">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
                        Dark
                    </button>
          </div>
        </div>
      </div>

      <div className="card bg-gray-200 dark:bg-navy-200 py-3 px-5 rounded-xl flex flex-col mb-5 transition-colors duration-500">
        <div className="title text-xl font-medium">Icon only</div>
        <div className="w-full py-3">
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-500 hover:bg-gray-600 hover:shadow-lg">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
              </svg>
            </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-lg">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="card bg-gray-200 dark:bg-navy-200 py-3 px-5 rounded-xl flex flex-col mb-5 transition-colors duration-500">
        <div className="title text-xl font-medium">Group</div>
        <div className="w-full py-3">
          <div className="flex mr-2" role="group">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 bg-blue-500 rounded-l-md hover:bg-blue-600 hover:shadow-lg">Left</button>
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Middle</button>
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 bg-blue-500 rounded-r-md hover:bg-blue-600 hover:shadow-lg">Right</button>
          </div>

          <div className="flex mr-2" role="group">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 bg-green-500 rounded-l-md hover:bg-green-600 hover:shadow-lg">Left</button>
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 bg-green-500 hover:bg-green-600 hover:shadow-lg">Middle</button>
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 bg-green-500 rounded-r-md hover:bg-green-600 hover:shadow-lg">Right</button>
          </div>

          <div className="flex mr-2" role="group">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 bg-purple-500 rounded-l-md hover:bg-purple-600 hover:shadow-lg">Left</button>
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 bg-purple-500 hover:bg-purple-600 hover:shadow-lg">Middle</button>
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 bg-purple-500 rounded-r-md hover:bg-purple-600 hover:shadow-lg">Right</button>
          </div>
        </div>
      </div>

      <div className="card bg-gray-200 dark:bg-navy-200 py-3 px-5 rounded-xl flex flex-col mb-5 transition-colors duration-500">
        <div className="title text-xl font-medium">Sizes</div>
        <div className="w-full py-3">
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-md py-3 px-6 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Large</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Default</button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button type="button" className="focus:outline-none text-white text-xs py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Small</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Component;