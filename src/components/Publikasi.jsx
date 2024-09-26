import React from 'react';
import logoDiy from '../assets/logo-diy.png'; // Update path sesuai dengan lokasi logo di proyek Anda

const publications = [
  {
    title: "Pengajuan Pemeriksaan Formulir UKL UPL PT. Lintang Bumi Sejahtera",
    date: "6 September 2024",
    description: "Pengajuan Formulir Upaya Pengelolaan Lingkungan Hidup dan Upaya Pemantauan Lingkungan Hidup (UKL-UPL) Rencana Kegiatan Eksplorasi Komoditas Batuan Andesit di Padukuhan Tamansari, Kalurahan Watugajah, Kapanewon Gedangsari, Kabupaten Gunungkidul oleh PT. Lintang Bumi Sejahtera.",
    link: "https://dlhk.jogjaprov.go.id/pengajuan-pemeriksaan-formulir-ukl-upl-pt-lintang-bumi-sejahtera/", 
  },
  {
    title: "Pengajuan Pemeriksaan Formulir UKL-UPL IPR Renny Wijaya",
    date: "28 Agustus 2024",
    description: "Pengajuan Formulir Upaya Pengelolaan Lingkungan Hidup dan Upaya Pemantauan Lingkungan Hidup (UKL-UPL) Kegiatan Pertambangan Rakyat Komoditas Feldspar di Padukuhan Jetak, Kalurahan Karangsari, Kapanewon Semin, Kabupaten Gunungkidul oleh Renny Wijaya.",
    link: "https://dlhk.jogjaprov.go.id/pengajuan-ukl-upl-ipr-renny-wijaya/", 
  },
  {
    title: "Pengajuan Pemeriksaan Formulir UKL-UPL IPR Basuki Abdulloh",
    date: "28 Agustus 2024",
    description: "Pengajuan Formulir Upaya Pengelolaan Lingkungan Hidup dan Upaya Pemantauan Lingkungan Hidup (UKL-UPL) Kegiatan Pertambangan Rakyat Komoditas Feldspar di Padukuhan Jetak, Kalurahan Karangsari, Kapanewon Semin, Kabupaten Gunungkidul oleh Basuki Abdulloh.",
    link: "https://dlhk.jogjaprov.go.id/pengajuan-pemeriksaan-formulir-ukl-upl-ipr-basuki-abdulloh/", 
  },
  {
    title: "Pengajuan Penilaian Dokumen Evaluasi Lingkungan Hidup (DELH) PT. Adhi Persada Beton",
    date: "8 Agustus 2024",
    description: "Pengajuan Penilaian Dokumen Evaluasi Lingkungan Hidup (DELH) Kegiatan Industri Mortar Atau Beton Siap Pakai Pabrik Precast Margorejo di Jalan Magelang KM 17,5 Kalurahan Margorejo, Kapanewon Tempel, Kabupaten Sleman, Daerah Istimewa Yogyakarta oleh PT. Adhi Persada Beton.",
    link: "https://dlhk.jogjaprov.go.id/delh-pt-adhi-persada-beton/", 
  },
];

const Publikasi = () => {
  return (
    <section className="py-10" id='publikasi'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">Pengumuman & Publikasi</h2>
        <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-4">
          {publications.map((publication, index) => (
            <a 
              key={index} 
              href={publication.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group cursor-pointer w-full max-lg:max-w-xs lg:w-1/4 border border-gray-300 rounded-2xl p-6 transition-all duration-300 hover:border-[#03346E] flex flex-col"
            >
              <div className="flex justify-center mb-4">
                <img src={logoDiy} alt="Logo DIY" className="rounded-lg w-20 h-20 object-cover" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <h4 className="text-gray-900 font-medium leading-6 mb-4 line-clamp-2">{publication.title}</h4>
                <p className="text-gray-700 text-sm flex-grow overflow-hidden mb-4" style={{ 
                    display: '-webkit-box', 
                    WebkitBoxOrient: 'vertical', 
                    WebkitLineClamp: 2 
                  }}>
                  {publication.description}
                </p>
                <span className="text-gray-500 text-xs">{publication.date}</span>
              </div>
            </a>
          ))}
        </div>
        <a 
          href="javascript:;" 
          className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
        >
          Lihat Semua
        </a>
      </div>
    </section>
  );
};

export default Publikasi;
