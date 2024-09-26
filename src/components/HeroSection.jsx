// src/components/HeroSection.jsx
import React from 'react';
import backgroundImage from '../assets/background-image.png'; // Gambar background di folder assets

const HeroSection = () => {
  // Data untuk konten hero section
  const heroContent = {
    title: [
      "Pelayanan Persetujuan Lingkungan",
      "Dinas Lingkungan Hidup dan Kehutanan",
      "Daerah Istimewa Yogyakarta"
    ],
    description: "Informasi Pelayanan dan Proses pengurusan persetujuan lingkungan (AMDAL, UKL UPL, SPPL, DELH, DPLH)",
    buttons: [
      { text: "Layanan Kami", href: "#layanan-kami", style: "bg-[#03346E] hover:bg-[#022b5d]" },
      { text: "Hubungi Kami", href: "/konsultasi", style: "border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700" }
    ]
  };

  return (
    <section
      id="/"
      className="relative bg-cover bg-center text-white py-20 h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 shadow-inner" style={{ boxShadow: `inset 0 0 300px #03346E` }} />
      <div className="relative container mx-auto px-6 flex items-center justify-start h-full pt-20">
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-4">
            {heroContent.title.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="text-lg mb-8">{heroContent.description}</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
            {heroContent.buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                target={button.target}
                rel={button.rel}
                className={`inline-flex justify-center items-center py-3 px-5 text-base font-semibold text-center text-white rounded-lg transition duration-300 ${button.style}`}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
