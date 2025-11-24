// components/layout/Header.tsx

import React from 'react';
import Link from 'next/link'; // Import the Link component

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-white hover:text-blue-200 transition duration-300">
            ALX Project 2
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/home" >
                <a className="text-white hover:text-blue-200 transition duration-300 font-medium">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-white hover:text-blue-200 transition duration-300 font-medium">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-white hover:text-blue-200 transition duration-300 font-medium">
                  Index
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;