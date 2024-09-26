import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
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
  <div className="text-center mt-8 pb-10">
    <img src={src} alt={alt} className="mx-auto" />
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

// Data poin Pemeriksaan UKL-UPL
const uklUplSteps = [
  "Pengisian di Amdalnet, dilanjutkan Pengajuan permohonan pemeriksaan Formulir UKL-UPL oleh penanggung jawab usaha dan/atau kegiatan di PTSP",
  "Pemeriksaan Administrasi",
  "Pembuatan Undangan",
  "Pengiriman Undangan",
  "Pelaksanaan rapat (paling lambat 5 hari kerja setelah lengkap)",
  "Perbaikan oleh pemrakarsa (paling lambat 5 hari kerja setelah lengkap)",
  "Penyampaian hasil perbaikan oleh Pemrakarsa",
  "Penerbitan PKPLH (2 hari kerja setelah perbaikan UKL-UPL)"
];

// Data poin "Jika Ya"
const yesSteps = [
  "Pelaku Usaha mengajukan Permohonan di OSS",
  "Melakukan penapisan di OSS",
  "Memproses PL melalui amdalnet dan PTSP KLHK/Prov/Kab/Kota/sesuai Kewenangan",
  "Penerbitan PL oleh Instansi Lingkungan Hidup",
  "Upload PL",
  "Pelaku Usaha menerima PB" 
];

// Data poin "Jika Tidak"
const noSteps = [
  "Pelaku Usaha mengajukan permohonan di OSS",
  "Pelaku Usaha meng-upload PL di OSS",
  "Pelaku Usaha menerima PB" 
];

// Data poin AMDAL Pemrakarsa Pemerintah
const governmentSteps = [
  "Pengajuan Rencana Kegiatan",
  "Penentuan Kewenangan",
  "Penapisan berbasis dampak",
  "Cetak Hasil Penapisan"
];

// Data gambar untuk ditampilkan
const imageData = [
  {
    title: 'Proses Pemeriksaan Formulir UKL-UPL',
    src: '/uklupl-overview.jpg',
    alt: 'Proses Pemeriksaan Formulir UKL-UPL',
    description: 'Gambar 1.1 Proses Pemeriksaan Formulir UKL-UPL'
  },
  {
    title: 'Alur Pengajuan UKL-UPL Pemrakarsa Pelaku Usaha',
    src: '/uklupl-pelaku.jpg',
    alt: 'Alur Pengajuan UKL-UPL Pemrakarsa Pelaku Usaha',
    description: 'Alur Pengajuan UKL-UPL Pemrakarsa Pelaku Usaha'
  },
  {
    title: 'Pengajuan UKL-UPL Pemrakarsa Pemerintah',
    src: '/uklupl-pemerintah.jpg',
    alt: 'Pengajuan UKL-UPL Pemrakarsa Pemerintah',
    description: 'Alur Pengajuan UKL-UPL Pemrakarsa Pemerintah'
  },
  {
    title: 'Alur Penyusunan dan Pemeriksaan UKL-UPL Melalui DLHK DIY',
    src: '/uklupl-manual-dlhk.jpeg',
    alt: 'Alur Penyusunan dan Pemeriksaan UKL-UPL Melalui DLHK DIY',
    description: 'Alur Penyusunan dan Pemeriksaan UKL-UPL Melalui DLHK DIY'
  }
];

const UklUplPreview = () => {
  return (
    <div>
      <Rectangle 
        title="Pemeriksaan UKL UPL" 
        description="Temukan informasi mendalam tentang layanan Pemeriksaan UKL UPL kami."
      />
      <div className="mt-8 px-4 lg:px-16 xl:px-80">
        <h1 className="text-2xl font-bold text-black mb-4 text-center">Overview Pemeriksaan UKL UPL</h1>
        <p className="text-lg text-justify mb-8">
          Proses Pemeriksaan Formulir UKL-UPL adalah tahap penting dalam proses perizinan lingkungan di Indonesia. UKL-UPL adalah salah satu jenis dokumen yang diperlukan untuk mendapatkan Persetujuan Lingkungan (PL) dari Badan Lingkungan Hidup (BLH) atau instansi terkait di Indonesia.
          <br /> <br /> 
          Langkah atau proses untuk Pemeriksaan Formulir UKL-UPL dijelaskan sebagai berikut:
        </p>
        <ul className="list-none text-lg  space-y-1 mb-8">
          {uklUplSteps.map((step, index) => (
            <ListItem key={index} text={step} />
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-4">Penyusunan dan Pemeriksaan UKL-UPL Melalui DLHK DIY</h2>
        <ImageSection
          src={imageData[3].src}
          alt={imageData[3].alt}
          description={imageData[3].description}
        />

        <h2 className="text-xl font-semibold mb-4">Proses Pengajuan Melalui AMDALNET</h2>

        <ImageSection 
          src={imageData[0].src} 
          alt={imageData[0].alt} 
          description={imageData[0].description}
        />

        <div className="mt-8 text-lg">
          <h2 className="text-xl font-semibold mb-4">Pengajuan UKL-UPL Pemrakarsa Pelaku Usaha</h2>
          <p className="mb-4">
          Pengajuan UKL-UPL oleh Pemrakarsa Pelaku Usaha mengacu pada serangkaian langkah atau proses yang harus diikuti oleh pelaku usaha atau pihak yang ingin memulai suatu proyek atau kegiatan yang berpotensi memiliki dampak signifikan terhadap lingkungan sekitarnya. Alur/proses dari pengajuan UKL-UPL Pemrakarsa Pelaku Usaha terdiri dari 2 logic (Ya dan Tidak) terkait Pemrakarsa yang sudah memiliki Persetujuan Lingkungan.
          </p>
          <h3 className="text-lg font-medium mb-2">Jika "Ya", artinya Pemrakarsa sudah memiliki Persetujuan Lingkungan maka alur atau prosesnya dijelaskan sebagai berikut:</h3>
          <ul className="list-none space-y-1 mb-4">
            {yesSteps.map((step, index) => (
              <ListItem key={index} text={step} />
            ))}
          </ul>

          <h3 className="text-lg font-medium mb-2">Sedangkan jika "Tidak", berarti Pemrakarsa tidak atau masih belum memiliki Persetujuan Lingkungan maka alur atau prosesnya secara garis besar dijelaskan sebagai berikut:</h3>
          <ul className="list-none space-y-1">
            {noSteps.map((step, index) => (
              <ListItem key={index} text={step} />
            ))}
          </ul>

          <ImageSection 
            src={imageData[1].src} 
            alt={imageData[1].alt} 
            description={imageData[1].description}
          />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Pengajuan UKL-UPL Pemrakarsa Pemerintah</h2>
            <p className="mb-4">
            Pengajuan UKL-UPL oleh Pemrakarsa Pemerintah mengacu pada serangkaian langkah atau proses yang harus diikuti oleh pelaku usaha atau pihak yang ingin memulai suatu proyek atau kegiatan yang berpotensi memiliki dampak signifikan terhadap lingkungan sekitarnya. 
            </p>
            <h3 className="text-lg font-medium mb-2">Prosesnya dijelaskan sebagai berikut:</h3>
            <ul className="list-none space-y-1 mb-4">
              {governmentSteps.map((step, index) => (
                <ListItem key={index} text={step} />
              ))}
            </ul>

            <ImageSection 
              src={imageData[2].src} 
              alt={imageData[2].alt} 
              description={imageData[2].description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UklUplPreview;
