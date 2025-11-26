import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Limelight } from 'next/font/google';

const limelight = Limelight({
  subsets: ['latin'],
  weight: '400', // limelight font, check weight back  later
});

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-sm px-4 sm:px-6 lg:px-8">
      <div className="navbar-start flex items-center gap-3">
        <Link href="/" className="inline-block">
          <Image
            src="/images/bishop_logo.webp"
            alt="Truck Bishop Logo"
            width={50}
            height={50}
            priority
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
        </Link>
        <Link href="/" className={`${limelight.className} text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,30,0.95)`}>
          Bishop's Drain
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-6">
          <Link href="/" className="hover:text-primary font-medium drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
            Home
          </Link>
          {/* <Link href="/about" className="hover:text-primary">
            About
          </Link> */}
          <a href="#services" className="hover:text-primary font-medium drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
            Services
          </a>
          <a href="#contact" className="hover:text-primary font-medium drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile menu button (optional - add if you want mobile nav) */}
      <div className="navbar-end lg:hidden">
        <button className="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}