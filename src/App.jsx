// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import LayananKami from './components/LayananKami';
import Publikasi from './components/Publikasi';
import Konsultasi from './components/Konsultasi';
import FAQ from './components/FAQ';

// Import halaman layanan
import DoklingPreview from './pages/DoklingPreview';
import AmdalPreview from './pages/AmdalPreview';
import UklUplPreview from './pages/UklUplPreview';
import SpplPreview from './pages/SpplPreview';
import DelhPreview from './pages/DelhPreview';
import DplhPreview from './pages/DplhPreview';
import AmdalNetPreview from './pages/AmdalNetPreview';
import KonsultasiPreview from './pages/KonsultasiPreview';
import AdminDashboard from './pages/AdminDashboard';

// Daftar halaman layanan dan rute mereka
const pages = [
  { path: '/penapisan-dokling', component: <DoklingPreview /> },
  { path: '/penilaian-amdal', component: <AmdalPreview /> },
  { path: '/pemeriksaan-ukl-upl', component: <UklUplPreview /> },
  { path: '/pendaftaran-sppl', component: <SpplPreview /> },
  { path: '/penilaian-delh', component: <DelhPreview /> },
  { path: '/pemeriksaan-dplh', component: <DplhPreview /> },
  { path: '/amdalnet', component: <AmdalNetPreview /> },
  { path: '/konsultasi', component: <KonsultasiPreview /> },
];

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Halaman utama dengan Navbar dan Footer */}
          <Route path="/" element={
            <>
              <Navbar />
              <HeroSection />
              <LayananKami />
              <Publikasi />
              <FAQ />
              <Konsultasi />
              <Footer />
            </>
          } />
          
          {/* Menggunakan perulangan untuk merender rute layanan */}
          {pages.map((page) => (
            <Route key={page.path} path={page.path} element={
              <>
                <Navbar />
                {page.component}
                <Footer />
              </>
            } />
          ))}

          {/* Halaman admin tanpa Navbar dan Footer */}
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
