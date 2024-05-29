import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <main>
    <header className="bg-gray-900 py-5 mt-5 px-5">
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <li className="flex justify-center items-center">
          <Link href="/">
            <Image src="/img/logofer.png" alt="Logo" width={100} height={100} />
          </Link>
        </li>

        {/* Enlace sobre mi */}
        <li className="flex justify-center sm:items-end">
          <Link href="/about-me" className="block text-lime-500 text-l font-bold text-center py-2 px-2 rounded-lg hover:bg-lime-700">
            Sobre mi
          </Link>
        </li>

        {/* Enlace Blog personal */}
        <li className="flex justify-center sm:items-end">
          <Link href="/blog" className="block text-lime-500 text-l font-bold text-center py-2 px-2 rounded-lg hover:bg-lime-700">
            Blog personal
          </Link>
        </li>

        {/* Enlace Educación */}
        <li className="flex justify-center sm:items-end">
          <Link href="/educacion" className="block text-lime-500 text-l font-bold text-center py-2 px-2 rounded-lg hover:bg-lime-700">
            Educación
          </Link>
        </li>
      </ul>
    </header>
    </main>
  );
};

export default Header;
