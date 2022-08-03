/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

//logo
import Image from 'next/image'
import LogoImage from '../public/images/logo.png'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Why KachiHealth?', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Log In', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1920px] bg-white px-2 py-6 sm:px-6 lg:px-8">
            <div className="relative mx-0 flex h-16 items-center justify-between md:mx-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="text-gray-400 hover:bg-violet-700 inline-flex items-center justify-center rounded-md p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 justify-center sm:items-center sm:justify-between">
                <div className="flex flex-shrink-0 items-center ">
                  <h1 className="cursor-pointer text-xl font-semibold ">
                    <Image src={LogoImage} width={200} alt="logo" />
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block md:ml-60">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'font-bold text-white text-primary'
                            : 'text-secondary hover:text-primary',
                          'text-md rounded-md px-3 py-2 font-medium transition-colors'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <a
                      href="#!"
                      className="min-w-[120px] cursor-pointer rounded-lg bg-secondary p-3 font-medium text-white transition-colors hover:bg-primary hover:shadow-xl text-center"
                    >
                      Request A Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-violet-500 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-violet-500 hover:text-white hover:shadow-lg',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
