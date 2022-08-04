import LogoImage from '../public/images/logo.png';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Why KachiHealth?', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Log In', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
]

export default function Navbar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={LogoImage?.src} className="mr-3 h-6 sm:h-9" alt="Logo" />
        </a>
        <div className="flex">
          <div className="flex md:order-2">
            <button type="button" className="min-w-[120px] cursor-pointer rounded-lg bg-secondary p-3 font-medium text-white transition-colors hover:bg-primary hover:shadow-xl text-center">Request A Demo</button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
          </div>
          <div className="hidden items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navigation?.map(function (item, idx) {
                return (
                  <li key={idx}>
                    <a href={item?.href} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{item?.name}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
