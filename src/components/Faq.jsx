import React, { useState } from 'react';

const faqs = [
  {
    question: "Apakah persetujuan teknis bisa paralel dengan persetujuan lingkungan?",
    answer: "Persetujuan teknis disusun dan diselesaikan terlebih dahulu karena menjadi prasyarat pengajuan persetujuan lingkungan."
  },
  {
    question: "Apa saja layanan yang diberikan oleh Dinas Lingkungan Hidup dan Kehutanan?",
    answer: "Layanan yang diberikan meliputi pengelolaan sampah, konservasi hutan, pengawasan pencemaran lingkungan, dan berbagai program pelestarian lingkungan lainnya."
  },
  {
    question: "Bagaimana cara mengajukan permohonan konsultasi atau layanan?",
    answer: "Untuk mengajukan permohonan, Anda dapat menghubungi kami melalui telepon atau email yang tertera pada halaman kontak kami, atau langsung mengunjungi kantor kami."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem] mb-16">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="accordion-group">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              toggleOpen={toggleOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ faq, index, isOpen, toggleOpen }) => (
  <div className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${isOpen ? 'accordion-active:bg-indigo-50 active' : ''}`}>
    <button
      className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-[#03346E] ${isOpen ? 'accordion-active:font-medium accordion-active:text-indigo-600' : ''}`}
      aria-controls={`collapse-${index}`}
      onClick={() => toggleOpen(index)}
    >
      <h5>{faq.question}</h5>
      <svg
        className={`text-gray-500 transition duration-500 group-hover:text-[#03346E] ${isOpen ? 'accordion-active:text-[#03346E] accordion-active:rotate-180' : ''}`}
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    {isOpen && (
      <div
        id={`collapse-${index}`}
        className="accordion-content w-full px-0 overflow-hidden"
        aria-labelledby={`heading-${index}`}
        style={{ maxHeight: '250px' }}
      >
        <p className="text-base text-gray-900 leading-6">
          {faq.answer}
        </p>
      </div>
    )}
  </div>
);

export default Faq;
