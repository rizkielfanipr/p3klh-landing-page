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

// Data langkah-langkah untuk proses penapisan
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

// Data gambar dan judul untuk ditampilkan
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

// Data untuk Perubahan Persetujuan Lingkungan
const delhSteps = [
  "Pengajuan Persetujuan Lingkungan Yang Sudah Berjalan Tanpa Dokumen Lingkungan (DELH/DPLH)",
  "Lokasi sesuai dengan tata ruang",
  "Pelaku Kegiatan mengajukan surat permohonan arahan terhadap kegiatan berjalan yang belum memiliki dokumen lingkungan",
  "Penerbitan sanksi administratif",
  "Pengajuan Surat Permohonan Persetujuan Lingkungan melalui Persetujuan DELH/DPLH",
  "Perbaikan dokumen DELH/DPLH",
  "Penerbitan persetujuan DELH/DPLH"
];

// Komponen utama DelhPreview
const DelhPreview = () => {
  return (
    <div>
      <Rectangle 
        title="Perubahan Persetujuan Lingkungan" 
        description="Temukan informasi tentang layanan Perubahan Persetujuan Lingkungan kami."
      />
      <div className="mt-8 px-4 lg:px-16 xl:px-80"> {/* Tambahkan padding horizontal */}
        <h1 className="text-2xl font-bold text-black mb-4 text-center">Overview Perubahan Persetujuan Lingkungan</h1> {/* Gaya judul */}
        <p className="text-lg text-justify">
          Pengajuan Persetujuan Lingkungan (PL) yang sudah berjalan tanpa dokumen lingkungan resmi, baik berupa Dokumen Evaluasi Lingkungan Hidup (DELH) atau Dokumen Pengelolaan Lingkungan Hidup (DPLH), mengacu pada situasi di mana suatu proyek telah dimulai tanpa mendapatkan persetujuan terkait dampak lingkungan.
          <br /> <br />
          Secara garis besar, dijelaskan proses pengajuan Persetujuan Lingkungan tanpa dokumen lingkungan sebagai berikut:
        </p>
        <ul className="list-none text-lg space-y-1 mb-8">
          {delhSteps.map((step, idx) => (
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

export default DelhPreview;
