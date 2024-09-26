// src/components/Navbar.js
import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/outline'; // Update impor sesuai dengan versi 2
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import logoDIY from '../assets/logo-diy.png'; // Gambar logo DIY di folder assets

const Navbar = () => {
  // Fungsi untuk scroll ke elemen dengan id tertentu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-7 px-6">
        {/* Bagian Kiri - Logo dan Text */}
        <div className="flex items-center">
          <img src={logoDIY} alt="Logo DIY" className="h-12 w-12" />
          <div className="ml-3 text-left">
            <h1 className="text-xs font-bold">DINAS LINGKUNGAN HIDUP DAN KEHUTANAN</h1>
            <h2 className="text-xs">DAERAH ISTIMEWA YOGYAKARTA</h2>
          </div>
        </div>

        {/* Menu Navbar */}
        <ul className="flex space-x-8 text-gray-700 font-normal">
          <li>
            <Link to="/" className="hover:text-blue-500" onClick={() => scrollToSection('/')}>
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-500" onClick={() => scrollToSection('layanan-kami')}>
              Layanan Kami
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-500" onClick={() => scrollToSection('publikasi')}>
              Pengumuman
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-500" onClick={() => scrollToSection('kontak-kami')}>
              Kontak Kami
            </Link>
          </li>
        </ul>

        {/* Bagian Kanan - Button Konsultasi */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a 
            href="/konsultasi" 
            className="inline-flex justify-center items-center py-2 px-5 text-base font-md text-center text-white rounded-lg bg-[#03346E] hover:bg-[#022b5d] focus:ring-4 focus:ring-[#03346E] transition duration-300 font-semibold"
            aria-label="Konsultasi"
          >
            <PhoneIcon className="h-4 w-4 mr-2" />
            Konsultasi
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
