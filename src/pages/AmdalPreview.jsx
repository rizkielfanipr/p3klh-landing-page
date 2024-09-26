import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Rectangle from '../components/Rectangle';

// Komponen untuk item dalam daftar
const ListItem = ({ text }) => (
  <li className="flex items-start">
    <ChevronRightIcon className="w-5 h-5 text-[#03346E] mr-2" />
    {text}
  </li>
);

// Komponen untuk menampilkan gambar dengan deskripsi
const ImageSection = ({ src, alt, description }) => (
  <div className="text-center mt-8">
    <img src={src} alt={alt} className="mx-auto" />
    <p className="text-gray-600 mt-2 mb-10">{description}</p>
  </div>
);

const AmdalPreview = () => {
  const steps = [
    "Pengisian di Amdalnet, dilanjutkan Pengajuan permohonan pemeriksaan KA oleh penanggung jawab usaha dan/atau kegiatan di PTSP.",
    "Notifikasi penerimaan dan berkas kelengkapan format formulir KA.",
    "Pembuatan Undangan dan identifikasi daftar ahli.",
    "Pengiriman undangan (paling lambat 5 hari kerja sebelum rapat pemeriksaan).",
    "Pelaksanaan rapat (paling lambat 10 hari kerja setelah notifikasi kelengkapan format).",
    "Penerbitan berita acara kesepakatan."
  ];

  const evaluationSteps = [
    "Pengisian di Amdalnet, dilanjutkan Pengajuan permohonan penilaian Andal & RKL-RPL oleh penanggung jawab usaha dan/atau kegiatan di PTSP.",
    "Penilaian Administrasi.",
    "Penyampaian pernyataan kelengkapan tertulis lengkap.",
    "Pembuatan undangan dan identifikasi daftar ahli.",
    "Penyampaian Undangan.",
    "Penilaian Mandiri oleh TUK (penilaian dan perbaikan dokumen paling lambat 50 hari kerja).",
    "Penyelenggaraan rapat.",
    "Perbaikan oleh pemrakarsa.",
    "Penyelenggaraan rapat hasil perbaikan.",
    "Perumusan hasil penilaian akhir substansif.",
    "Penyampaian hasil uji kelayakan dan draft SKKL ke Menteri.",
    "Penerbitan SKKL."
  ];

  const businessProcessSteps = [
    "Pelaku Usaha mengajukan Permohonan di OSS",
    "Melakukan penapisan di OSS",
    "Memproses PL melalui amdalnet dan PTSP KLHK/Prov/Kab/Kota/sesuai Kewenangan",
    "Penerbitan PL oleh Instansi Lingkungan Hidup",
    "Finalisasi Proses perizinan oleh pelaku usaha di OSS"
  ];

  const governmentProcessSteps = [
    "Pengajuan Rencana Kegiatan",
    "Penentuan Kewenangan",
    "Penapisan berbasis dampak",
    "Cetak Hasil Penapisan"
  ];

  const images = [
    { src: '/amdal-manual-dlhk.jpg', alt: 'Proses Penilaian AMDAL', description: 'Proses Penilaian AMDAL Melalui DLHK DIY' },
    { src: '/amdal-overview.jpg', alt: 'Proses Penilaian AMDAL', description: 'Alur Proses Melalui AMDALNET' },
    { src: '/amdal-pelaku.jpg', alt: 'Alur Pengajuan AMDAL Pemrakarsa Pelaku Usaha', description: 'Alur Pengajuan AMDAL Pemrakarsa Pelaku Usaha' },
    { src: '/amdal-pemerintah.jpg', alt: 'Alur Pengajuan AMDAL Pemerintah', description: 'Alur Pengajuan AMDAL Pemerintah' }
  ];

  const sections = [
    { title: 'Penilaian AMDAL', steps: steps },
    { title: 'Penilaian ANDAL & RKL-RPL', steps: evaluationSteps },
    { title: 'Proses Manual Melalui DLHK DIY', images: [images[0]] },
    { title: 'Proses Melalui AMDALNET', images: [images[1]] },
    { title: 'Pengajuan AMDAL Pemrakarsa Pelaku Usaha', steps: businessProcessSteps, images: [images[2]] },
    { title: 'Pengajuan AMDAL Pemrakarsa Pemerintah', steps: governmentProcessSteps, images: [images[3]] }
  ];

  return (
    <div>
      <Rectangle 
        title="Penilaian AMDAL" 
        description="Temukan informasi mendalam tentang layanan Penilaian AMDAL kami."
      />
      <div className="mt-8 px-4 lg:px-16 xl:px-80">
        <h1 className="text-2xl font-bold text-black mb-4 text-center">Overview Penilaian AMDAL</h1>
        <p className="text-lg text-justify mb-8">
          Proses Analisis Mengenai Dampak Lingkungan (AMDAL) penting untuk memastikan bahwa setiap kegiatan yang dilakukan memperhitungkan dan mengelola dampak-dampak lingkungan yang mungkin timbul terhadap lingkungan sekitar. Proses sistematis yang dilakukan pada proses penilaian ini juga bertujuan untuk mengidentifikasi, mengukur, mengevaluasi, memahami serta mengelola dampak-dampak tersebut guna meminimalkan risiko terhadap lingkungan dan kesehatan masyarakat terkait kegiatan tersebut. Proses Penilaian AMDAL secara garis besar dimulai dengan mengisi Formulir Kerangka Acuan dan berikutnya masuk kedalam proses penilaian AMDAL & RKL-RPL.
        </p>

        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            {section.steps && (
              <ul className="list-none text-lg space-y-1 mb-8">
                {section.steps.map((step, idx) => (
                  <ListItem key={idx} text={step} />
                ))}
              </ul>
            )}
            {section.images && section.images.map((img, idx) => (
              <ImageSection key={idx} src={img.src} alt={img.alt} description={img.description} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmdalPreview;
