"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import Logo from "@/assets/shipy_logo.webp";

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-transparent relative z-50 block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          <div className="flex flex-1 justify-between">
            <div className="flex shrink-0 items-center">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-primary-400 hover:bg-primary-100 hover:text-primary-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Abrir menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
              <Image
                alt="Your Company"
                src={Logo}
                className="w-auto"
                width={30}
                height={30}
              />
              <h2 className="sm:text-3xl text-xl font-semibold sm:ml-2 ml-0">
                Shipy
              </h2>
            </div>

            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a
                href="#"
                className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-primary-900 hover:border-primary-300 hover:text-primary-500"
              >
                Soluções
              </a>
              <a
                href="#"
                className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-primary-900 hover:border-primary-300 hover:text-primary-500"
              >
                Nosso produto
              </a>
              <a
                href="#"
                className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-primary-900 hover:border-primary-300 hover:text-primary-500"
              >
                Dúvidas frequentes
              </a>
              <a
                href="#"
                className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-primary-900 hover:border-primary-300 hover:text-primary-500"
              >
                Contato
              </a>
            </div>
            <div className="flex items-center">
              <div className="shrink-0">
                <a
                  href="#"
                  className="rounded-md bg-secondary-500 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-secondary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Conheça o app!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden bg-primary-100 absolute w-full">
        <div className="space-y-1 pb-3 pt-2">
          <DisclosureButton
            as="a"
            href="#"
            className="block py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6"
          >
            Soluções
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6"
          >
            Nossos produtos
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6"
          >
            Dúvidas frequentes
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6"
          >
            Contato
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
