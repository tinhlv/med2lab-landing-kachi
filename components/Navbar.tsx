/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import LogoImage from '../public/images/logo.png'

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Why KachiHealth?', href: '#why-kachi-health', current: false },
  { name: 'Contact', href: '#contact', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'Log In', href: '#', current: false }
]

export default function Example() {
  return (
    <div className="dark:bg-gray-900 animated fixed sticky top-0 left-0 top-0 z-20 w-full bg-white px-2 py-2.5 shadow-sm sm:px-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative py-2">
              <nav
                className="relative flex items-center justify-between sm:h-10"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="#home">
                      <span className="sr-only">Med2lab</span>
                      <img
                        alt="Med2lab"
                        className="h-8 w-auto sm:h-10"
                        src={LogoImage?.src}
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="mr-4 cursor-pointer rounded-lg bg-primary p-2 text-center font-medium text-secondary transition-colors hover:bg-primary hover:shadow-xl md:hidden"
                      >
                        Request A Demo
                      </button>
                      <Popover.Button className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:ring-indigo-500 inline-flex items-center justify-center rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-inset">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-500 hover:text-primary font-medium transition-colors uppercase"
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    type="button"
                    className="min-w-[120px] cursor-pointer rounded-lg bg-primary p-3 text-center font-medium text-secondary transition-colors hover:bg-primary hover:shadow-xl"
                  >
                    Request A Demo
                  </button>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="ring-black overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img className="h-8 w-auto" src={LogoImage?.src} alt="" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:ring-indigo-500 inline-flex items-center justify-center rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-inset">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block rounded-md px-3 py-2 text-base font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  )
}
