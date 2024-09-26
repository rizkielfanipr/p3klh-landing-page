import React, { useState } from 'react';
import axios from 'axios';

const KonsultasiPreview = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [feedback, setFeedback] = useState({ success: '', error: '' });

    const handleChange = ({ target: { name, value } }) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5001/konsultasi', formData);
            if (data.success) {
                setFeedback({ success: 'Pesan berhasil dikirim!', error: '' });
                setFormData({ name: '', email: '', phone: '', message: '' });
            }
        } catch {
            setFeedback({ success: '', error: 'Gagal mengirim pesan. Silakan coba lagi.' });
        }
    };

    return (
        <div className="flex flex-wrap justify-center items-center min-h-screen mt-20">
            {/* Bagian Kiri */}
            <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-[#003d66] to-[#003b8c] text-white flex flex-col justify-center items-start rounded-r-custom-xl shadow-2xl">
                <h1 className="text-4xl font-bold mb-4">Ingin Berkonsultasi Langsung</h1>
                <p className="text-2xl mb-6">Hubungi Kami Sekarang!</p>
                <p className="text-lg font-semibold">Dinas Lingkungan Hidup dan Kehutanan</p>
                <p className="text-lg">Daerah Istimewa Yogyakarta</p>
                <p className="text-md mb-3">Bidang P3KLH</p>
                <p className="text-lg font-normal">Jam Kerja: Senin - Jumat, 08.00 - 16.00 WIB</p>
                <p className='text-lg font-normal mb-6'>Pelayanan AMDALNET: Jumat, 08.00 - 11.00 WIB</p>

                {['kajianlh3@gmail.com', '081329089589', 'Jalan Argulobang Nomor 19, Daerah Istimewa Yogyakarta 55225'].map((info, index) => (
                    <div className="flex items-center mb-4" key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d={index === 0 ? "M4 4h16v16H4z" : index === 1 ? "M22 16.92V22a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 2 4.18 2 2 0 0 1 4 2h5.08a2 2 0 0 1 2 1.72l.72 4a2 2 0 0 1-1 2.18l-2.1 1.05a16 16 0 0 0 6.92 6.92l1.05-2.1a2 2 0 0 1 2.18-1l4 .72a2 2 0 0 1 1.72 2z" : "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"} />
                            {index === 0 ? <polyline points="4 8 12 12 20 8" /> : null}
                        </svg>
                        <span className="ml-2">{info}</span>
                    </div>
                ))}
            </div>

            {/* Bagian Kanan */}
            <div className="w-full md:w-1/2 p-8">
                <div className="w-full max-w-lg p-4 py-6 rounded-lg bg-gray-50 ml-20">
                    <form onSubmit={handleSubmit}>
                        {['name', 'email', 'phone', 'message'].map((field, index) => (
                            <div key={field} className={`mt-${index > 0 ? 4 : 0}`}>
                                <label className="block mb-2 text-sm text-gray-600">{field === 'message' ? 'Pesan' : field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                {field !== 'message' ? (
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        required
                                        placeholder={`Masukkan ${field === 'message' ? 'pesan' : field}`}
                                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                ) : (
                                    <textarea
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        required
                                        placeholder="Pesan & Saran Anda"
                                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                )}
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="w-full px-6 py-2.5 mt-4 text-sm font-medium tracking-wide text-white bg-[#022b5d] rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        >
                            Kirim Pesan
                        </button>

                        {feedback.success && <p className="mt-4 text-sm text-green-500">{feedback.success}</p>}
                        {feedback.error && <p className="mt-4 text-sm text-red-500">{feedback.error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default KonsultasiPreview;
