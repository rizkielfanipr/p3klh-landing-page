// src/components/Konsultasi.jsx
import React from 'react';

const Konsultasi = () => {
  // Data untuk konten konsultasi
  const konsultasiContent = {
    title: "Ingin Berkonsultasi Langsung di Kantor?",
    description: [
      "Ruang Pelayanan Publik Dinas Lingkungan Hidup & Kehutanan",
      "Daerah Istimewa Yogyakarta",
      "Jl. Argulobang No. 19, Baciro, Gondokusuman, Yogyakarta 55225"
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.835555467129!2d110.3803364!3d-7.7905414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b7e162014f%3A0x900075df7e90db72!2sDinas%20Lingkungan%20Hidup%20dan%20Kehutanan%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sen!2sid!4v1634619435200!5m2!1sen!2sid"
  };

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-start text-left">
          <div className="w-full max-w-md">
            <h1 className="text-5xl font-bold mb-6 text-darkblue">
              {konsultasiContent.title}
            </h1>
            {konsultasiContent.description.map((line, index) => (
              <p key={index} className={`text-lg mb-6 text-darkblue ${index === 2 ? '' : 'mb-2'}`}>
                {line}
              </p>
            ))}
          </div>
          <div className="flex-grow max-w-lg">
            <iframe
              src={konsultasiContent.mapSrc}
              width="500"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Konsultasi;
