import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "@/utils";
import Link from "next/link";

export const HomeHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative px-6 pt-6 lg:pl-8 lg:pr-0">
      <nav className="flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Marianna Roige</span>
          <img alt="Marianna Roige" className="h-14 lg:h-20 w-auto" src="https://cdn.mariannaroige.com/logo.png" />
        </a>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="hidden lg:ml-12 lg:block lg:space-x-14">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-base font-semibold leading-6 text-gray-500">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div className="flex flex-row-reverse items-center justify-between">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Marianna Roige</span>
              <img className="h-8" src="https://cdn.mariannaroige.com/logo.png" alt="Marianna Roige" />
            </a>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <Link
                onClick={() => setMobileMenuOpen(false)}
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-400/10"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};
