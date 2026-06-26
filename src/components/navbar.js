import { useState, useEffect } from 'react' // 1. Tambahkan useState & useEffect
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoPzx from '../assets/logo-Pzx.png'

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'Comparison', href: '#comparison' },
  { name: 'Why Choose', href: '#why-choose-us' },
  { name: 'Product Specs', href: '#product-specs' },
  { name: 'Mission & Vision', href: '#mission-vision' },
  { name: 'Contact', href: '#contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Memicu perubahan saat seksi berada di tengah layar
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Ambil semua element seksi berdasarkan href navigasi
    navigation.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-[#0E1528] border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            
            <a href="#hero" className="flex shrink-0 items-center gap-2 cursor-pointer group">
  {/* Logo PZX */}
              <img 
                src={LogoPzx} 
                alt="PZX Horizon Logo" 
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              
              {/* Teks Brand */}
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-widest text-white leading-none transition-colors duration-300 group-hover:text-[#e2a862]">
                  PZX HORIZON
                </span>
                <span className="text-[9px] tracking-wider text-gray-400 font-medium mt-1">
                  Coastal Connectivity Specialists
                </span>
              </div>
            </a>

            {/* Menu Navigasi Desktop (SUDAH OTOMATIS ACTIVE WARNA EMAS) */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="flex space-x-1 lg:space-x-4">
                {navigation.map((item) => {
                  // Cek apakah href item saat ini cocok dengan state seksi yang aktif
                  const isCurrent = item.href === `#${activeSection}`;
                  
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={isCurrent ? 'page' : undefined}
                      className={classNames(
                        isCurrent 
                          ? 'text-[#e2a862] font-semibold' // Menyala emas saat aktif
                          : 'text-gray-400 hover:text-white transition-colors duration-200',
                        'px-3 py-2 text-xs lg:text-sm font-medium tracking-wide'
                      )}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile (SUDAH OTOMATIS ACTIVE JUGA) */}
      <DisclosurePanel className="sm:hidden bg-[#070b13] border-b border-white/5">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const isCurrent = item.href === `#${activeSection}`;

            return (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={isCurrent ? 'page' : undefined}
                className={classNames(
                  isCurrent 
                    ? 'bg-[#e2a862]/10 text-[#e2a862] font-semibold' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}