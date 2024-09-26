import React from 'react';
import logoDIY from '../assets/logo-diy.png';
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  // Data untuk media sosial
  const socialLinks = [
    { icon: <FaTwitter className="h-6 w-6" />, href: "https://twitter.com", label: "X DLHK DIY" },
    { icon: <FaInstagram className="h-6 w-6" />, href: "https://instagram.com", label: "Instagram DLHK DIY" },
    { icon: <FaFacebook className="h-6 w-6" />, href: "https://facebook.com", label: "Facebook DLHK DIY" },
    { icon: <FaYoutube className="h-6 w-6" />, href: "https://youtube.com", label: "YouTube DLHK DIY" },
  ];

  // Data untuk kontak
  const contactLinks = [
    { icon: <FaPhoneAlt className="h-6 w-6" />, href: "tel:+1234567890", label: "(0274) 588 518" },
    { icon: <FaEnvelope className="h-6 w-6" />, href: "mailto:contact@dinaslhkDIY.go.id", label: "dlhk.jogjaprov.go.id" },
  ];

  return (
    <>
      <footer id='kontak-kami' className="bg-[#03346E] text-white py-40 rounded-t-custom-xl">
        <div className="container mx-auto flex flex-col items-center justify-center gap-12">
          <div className="flex items-center justify-start gap-4 -mt-20">
            <img src={logoDIY} alt="Logo DIY" className="h-12 w-12" />
            <div className="text-left">
              <h1 className="text-lg font-semibold">DINAS LINGKUNGAN HIDUP DAN KEHUTANAN</h1>
              <h2 className="text-sm">DAERAH ISTIMEWA YOGYAKARTA</h2>
            </div>
          </div>

          {/* Section Ikuti Kami */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-gray-300">
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Section Kontak Kami */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Kontak Kami</h3>
            <div className="flex justify-center gap-8">
              {contactLinks.map((link) => (
                <a key={link.href} href={link.href} className="flex items-center gap-2 text-white hover:text-gray-300">
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Kotak Copyright */}
      <div className="bg-[#02234F] text-white text-center py-4">
        <p className="text-md">&copy; 2024 Dinas Lingkungan Hidup dan Kehutanan Daerah Istimewa Yogyakarta.</p>
      </div>
    </>
  );
};

export default Footer;
