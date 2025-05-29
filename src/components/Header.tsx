"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";

import Container from "./Container";
import { siteDetails } from "@/data/siteDetails";
import { menuItems } from "@/data/menuItems";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full lg:px-4">
      <Container className="!px-0">
        <nav
          className={`bg-primary-950 mx-auto flex justify-between items-center py-2.5 px-5 lg:mt-5 ${
            isOpen ? "" : "rounded-b-2xl lg:rounded-full "
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/raja-emas-logo.png"
              alt={siteDetails.siteName}
              width={150}
              height={150}
              quality={100}
              priority={true}
              unoptimized={true}
              className="w-[120px] md:w-[150px] h-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.text} className="font-semibold">
                <Link
                  href={item.url}
                  className="text-foreground transition-colors font-medium text-white"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#cta"
            className="hidden xl:block text-primary-950 px-8 py-2.5 rounded-full transition-colors font-bold bg-gradient-gold"
          >
            Hubungi Kami
          </Link>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-primary focus:outline-none flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark
                  className="h-8 w-8 text-white"
                  aria-hidden="true"
                />
              ) : (
                <HiBars3 className="h-8 w-8 text-white" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="xl:hidden bg-primary-950 shadow-lg rounded-b-xl">
          <ul className="flex flex-col space-y-5 pt-4 pb-6 px-12 bg-primary-950">
            {menuItems.map((item) => (
              <li key={item.text} className="text-center">
                <Link
                  href={item.url}
                  className="text-white font-bold block text-lg"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#ctaSosmed"
                className="bg-secondary-500 px-5 py-2 rounded-full block w-full text-primary font-medium text-center"
                onClick={toggleMenu}
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
