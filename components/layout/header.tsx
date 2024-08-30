"use client";

import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[rgba(76,175,80,0.8)] text-primary-foreground py-4 px-6 flex items-center justify-between relative">
      <div className="flex items-center gap-4">
        <Image
          src="/aichara_farm.svg"
          width={40}
          height={40}
          alt="Farm Logo"
          className="rounded-full"
          style={{ aspectRatio: '40/40', objectFit: 'cover' }}
        />
        <h1 className="text-2xl font-bold">Aichara Farm</h1>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-primary-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu for Desktop */}
      <nav className="hidden sm:flex sm:items-center sm:gap-4">
        <Link href="/#" className="hover:underline" prefetch={false}>
          Home
        </Link>
        <Link href="/#about" className="hover:underline" prefetch={false}>
          About
        </Link>
        <Link href="/gallery" className="hover:underline" prefetch={false}>
          Gallery
        </Link>
        <Link href="/#visit" className="hover:underline" prefetch={false}>
          Visit
        </Link>
        <Link href="/events" className="hover:underline">
          Events
        </Link>
        <Link href="/#contact" className="hover:underline" prefetch={false}>
          Contact
        </Link>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          className="fixed top-0 right-0 w-1/5 h-80 bg-black opacity-80 p-6 z-40 shadow-lg sm:hidden overflow-y-auto"
        >
          <button
            onClick={toggleMenu}
            className="text-primary-foreground mb-4"
            aria-label="Close menu"
          >
            {/* Close Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col items-start gap-4">
            <Link href="/#" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="/#about" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="/gallery" className="hover:underline" prefetch={false}>
              Gallery
            </Link>
            <Link href="/#visit" className="hover:underline" prefetch={false}>
              Visit
            </Link>
            <Link href="/events" className="hover:underline">
              Events
            </Link>
            <Link href="/#contact" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
