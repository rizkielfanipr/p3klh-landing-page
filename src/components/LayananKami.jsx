import React from 'react';
import { Link } from 'react-router-dom';

// Contoh data layanan dengan jalur logo yang benar
const services = [
  { title: "Penapisan DOKLING", logo: "/assets/icons/penapisan-dokling.png", link: "/penapisan-dokling" },
  { title: "Penilaian AMDAL", logo: "/assets/icons/penilaian-amdal.png", link: "/penilaian-amdal" },
  { title: "Pemeriksaan UKL UPL", logo: "/assets/icons/pemeriksaan-ukl-upl.png", link: "/pemeriksaan-ukl-upl" },
  { title: "Registrasi SPPL", logo: "/assets/icons/pendaftaran-sppl.png", link: "/pendaftaran-sppl" },
  { title: "Penilaian DELH/DPLH", logo: "/assets/icons/penilaian-delh.png", link: "/penilaian-delh" },
  { title: "Submit Dokumen/Surat", logo: "/assets/icons/pemeriksaan-dplh.png", link: "/pemeriksaan-dplh" },
  { title: "AMDALNET", logo: "/assets/icons/amdalnet.png", link: "/amdalnet" },
  { title: "Konsultasi", logo: "/assets/icons/konsultasi.png", link: "/konsultasi" },
];

const LayananKami = () => {
  return (
    <section id="layanan-kami" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link} 
              className="group cursor-pointer border border-gray-300 rounded-2xl p-6 transition-all duration-300 hover:border-[#03346E] flex flex-col items-center"
            >
              <div className="flex justify-center mb-4">
                <img src={service.logo} alt={service.title} className="rounded-lg w-20 h-20 object-cover" />
              </div>
              <h3 className="text-gray-900 font-medium leading-6 text-center">{service.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayananKami;
