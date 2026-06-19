import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoPzx from '../assets/logo-Pzx.png'

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Comparison', href: '#comparison', current: false },
  { name: 'Why Choose', href: '#why-choose-us', current: false },
  { name: 'Product Specs', href: '#product-specs', current: false },
  { name: 'Mission & Vision', href: '#mission-vision', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-[#0E1528] border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          
          {/* Mobile menu button*/}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            
            <div className="flex shrink-0 items-center gap-2">
              <img src={LogoPzx} alt="PZX Horizon Logo" className="h-8 w-auto" />
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-widest text-white leading-none">PZX HORIZON</span>
                <span className="text-[9px] tracking-wider text-gray-400 font-medium">Coastal Connectivity Specialists</span>
              </div>
            </div>

            {/* Menu Navigasi Tengah ke Kanan */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="flex space-x-1 lg:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current 
                        ? 'text-[#e2a862]' // Menu aktif berwarna aksen emas
                        : 'text-gray-400 hover:text-white transition-colors duration-200',
                      'px-3 py-2 text-xs lg:text-sm font-medium tracking-wide'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Menu Dropdown untuk Mobile Tampilan HP */}
      <DisclosurePanel className="sm:hidden bg-[#070b13] border-b border-white/5">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current 
                  ? 'bg-[#e2a862]/10 text-[#e2a862]' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}