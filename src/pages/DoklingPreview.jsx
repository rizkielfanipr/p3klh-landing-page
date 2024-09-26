import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid'; // Hanya chevron yang digunakan
import Rectangle from '../components/Rectangle';

// Komponen untuk item dalam daftar
const ListItem = ({ text }) => (
  <li className="flex items-start mb-2">
    <ChevronRightIcon className="w-5 h-5 text-[#03346E] mr-2" />
    {text}
  </li>
);

// Komponen untuk menampilkan gambar dengan deskripsi
const ImageSection = ({ src, alt, description }) => (
  <div className="text-center mt-8 pb-20">
    <img src={src} alt={alt} className="mx-auto" />
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const steps = [
  "Menambah Rencana Usaha dan/atau Kegiatan",
  "Mengisi Tapak Proyek",
  "Mengisi Pendekatan Studi",
  "Penetapan Kewenangan",
  "Menentukan Status Kegiatan",
  "Menentukan Jenis Kegiatan",
  "Mengisi Persetujuan Awal",
  "Mengisi Persetujuan Teknis",
  "Hasil Penapisan Keluar"
];

// Array data untuk gambar dan judul
const imageData = [
  {
    title: 'Alur Proses Penapisan Dokumen Lingkungan Melalui DLHK DIY',
    src: '/dokling-dlhk.jpg',
    alt: 'Alur Proses Penapisan Dokumen Lingkungan Melalui DLHK DIY',
    description: 'Alur Proses Penapisan Dokumen Lingkungan Melalui DLHK DIY'
  },
  {
    title: 'Alur Proses Penapisan Dokumen Lingkungan Melalui AMDALNET',
    src: '/dokling-overview.jpg',
    alt: 'Alur Proses Penapisan Dokumen Lingkungan Melalui AMDALNET',
    description: 'Alur Proses Penapisan Dokumen Lingkungan Melalui AMDALNET'
  }
];


const DoklingPreview = () => {
  return (
    <div>
      <Rectangle 
        title="Penapisan Dokumen Lingkungan" 
        description="Temukan informasi mendalam tentang layanan Penapisan Dokumen Lingkungan kami."
      />
      <div className="mt-8 px-4 lg:px-16 xl:px-80"> {/* Tambahkan padding horizontal */}        
        <h1 className="text-2xl font-bold text-black mb-4 text-center">Overview Penapisan DOKLING</h1> {/* Gaya judul */}
        <p className="text-lg text-justify">
          Proses penapisan pada AMDAL (Analisis Mengenai Dampak Lingkungan) merujuk pada langkah-langkah sistematis untuk menentukan apakah suatu proyek atau kegiatan memerlukan kajian AMDAL atau tidak. Ini adalah langkah awal dalam evaluasi dampak lingkungan.
          <br /> <br /> 
          Secara garis besar dijelaskan proses Penapisan yang dijelaskan sebagai berikut:
        </p>
        <ul className="list-none text-lg space-y-1 mb-8">
          {steps.map((step, idx) => (
            <ListItem key={idx} text={step} />
          ))}
        </ul>
        
        {/* Perulangan untuk gambar dan judul */}
        {imageData.map((image, idx) => (
          <div key={idx}>
            <h2 className='text-xl font-semibold mb-4'>{image.title}</h2>
            <ImageSection 
              src={image.src} 
              alt={image.alt} 
              description={image.description} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoklingPreview;
