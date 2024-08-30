import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = (): ReactElement => {
  return (
    <header className="bg-[rgba(76,175,80,0.8)] text-primary-foreground py-4 px-4 sm:px-6 flex items-center justify-between">
      <div className="flex items-center gap-2 sm:gap-4">
        <Image
          src="/aichara_farm.svg"
          width={40}
          height={40}
          alt="Farm Logo"
          className="rounded-full"
          style={{ aspectRatio: '40/40', objectFit: 'cover' }}
        />
        <h1 className="text-xl sm:text-2xl font-bold">Aichara Farm</h1>
      </div>
      <nav className="hidden sm:flex items-center gap-2 sm:gap-4">
        <Link href="/#" className="hover:underline" prefetch={false}>
          Home
        </Link>
        <Link href="/#about" className="hover:underline" prefetch={false}>
          About
        </Link>
        <Link href="/gallery" className="hover:underline flex justify-center" prefetch={false}>
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
    </header>
  );
};

export default Header;
