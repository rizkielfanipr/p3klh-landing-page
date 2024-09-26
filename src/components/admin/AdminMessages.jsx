import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminMessages = () => {
    const [messages, setMessages] = useState([]);
    const [answer, setAnswer] = useState('');
    const [messageId, setMessageId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://localhost:5001/konsultasi/messages');
                setMessages(response.data.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);

    const handleDelete = async () => {
        if (deleteId) {
            try {
                await axios.delete(`http://localhost:5001/konsultasi/messages/${deleteId}`);
                // Use functional state update to ensure we have the latest messages state
                setMessages(prevMessages => prevMessages.filter(msg => msg.id !== deleteId));
                setShowModal(false); // Close modal after deletion
                setDeleteId(null); // Reset deleteId
            } catch (error) {
                console.error('Error deleting message:', error);
            }
        }
    };

    const confirmDelete = (id) => {
        setDeleteId(id);
        setShowModal(true);
    };

    const handleAnswer = async (id) => {
        try {
            await axios.put(`http://localhost:5001/konsultasi/messages/${id}/answer`, { answer });
            setMessages(prevMessages => 
                prevMessages.map(msg => msg.id === id ? { ...msg, answer } : msg)
            );
            setAnswer('');
            setMessageId(null);
        } catch (error) {
            console.error('Error answering message:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Pesan Konsultasi</h2>
            {messages.length > 0 ? (
                <ul className="space-y-4">
                    {messages.map((msg) => (
                        <li key={msg.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                            <div className="flex justify-between items-center mb-2">
                                <strong className="text-lg">{msg.name}</strong>
                                <span className="text-gray-600">{msg.email}</span>
                            </div>
                            <p className="text-gray-800">{msg.message}</p>
                            {msg.answer && (
                                <p className="mt-2 text-green-600">
                                    <strong>Jawaban:</strong> {msg.answer}
                                </p>
                            )}
                            <div className="mt-4">
                                <button 
                                    onClick={() => confirmDelete(msg.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600 transition"
                                >
                                    Hapus
                                </button>
                                <button 
                                    onClick={() => { setMessageId(msg.id); }}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                >
                                    Jawab
                                </button>
                            </div>
                            {messageId === msg.id && (
                                <div className="mt-4">
                                    <textarea 
                                        className="border rounded p-2 w-full h-24 resize-none"
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                        placeholder="Tulis jawaban di sini"
                                    />
                                    <button 
                                        onClick={() => handleAnswer(msg.id)}
                                        className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                                    >
                                        Kirim Jawaban
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">Tidak ada pesan konsultasi yang tersedia.</p>
            )}

            {/* Modal Konfirmasi Hapus */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-1/3">
                        <h3 className="text-lg font-semibold mb-4">Konfirmasi Hapus</h3>
                        <p>Apakah Anda yakin ingin menghapus pesan ini?</p>
                        <div className="mt-4 flex justify-end">
                            <button 
                                onClick={() => setShowModal(false)}
                                className="bg-gray-400 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500 transition"
                            >
                                Batal
                            </button>
                            <button 
                                onClick={handleDelete} // Call handleDelete without id
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminMessages;
