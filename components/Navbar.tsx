import LogoImage from '../public/images/logo.png'

const navigation = [
  { name: 'Home', href: '#Home', current: true },
  { name: 'Why KachiHealth?', href: '#WhyKachiHealth', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Log In', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
]

export default function Navbar() {
  return (
    <nav className="dark:bg-gray-900 animated fixed sticky top-0 left-0 top-0 z-20 w-full bg-white px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={LogoImage?.src} className="mr-3 h-6 sm:h-9" alt="Logo" />
        </a>
        <div className="flex">
          <div className="flex md:order-2">
            <button
              type="button"
              className="min-w-[120px] cursor-pointer rounded-lg bg-primary p-3 text-center font-medium text-secondary transition-colors hover:bg-primary hover:shadow-xl"
            >
              Request A Demo
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="bg-gray-50 border-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mt-4 flex flex-col rounded-lg border p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
              {navigation?.map(function (item, idx) {
                return (
                  <li key={idx}>
                    <a
                      href={item?.href}
                      className="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 pr-4 pl-3 dark:hover:text-white md:p-0 md:dark:hover:text-white"
                    >
                      {item?.name}
                    </a>
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
