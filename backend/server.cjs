const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', // Ganti dengan password MySQL Anda
    database: 'konsultasi_db'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Failed to connect to MySQL:', err);
        process.exit(1); // Keluar jika tidak dapat terhubung
    } else {
        console.log('Connected to MySQL database');
    }
});

// Route to test server
app.get('/', (req, res) => {
    res.send('Welcome to the Consultation API!');
});

// Route to submit consultation message
app.post('/konsultasi', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validasi input
    if (!name || !email || !phone || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const sql = 'INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, phone, message], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ success: false, message: 'Failed to submit message' });
        }
        res.status(200).json({ success: true, message: 'Message submitted successfully' });
    });
});

// Route to get all consultation messages (for admin)
app.get('/konsultasi/messages', (req, res) => {
    const sql = 'SELECT * FROM messages ORDER BY created_at DESC';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ success: false, message: 'Failed to retrieve messages' });
        }
        res.status(200).json({ success: true, data: results });
    });
});

// Route to delete a consultation message
app.delete('/konsultasi/messages/:id', (req, res) => {
    const messageId = req.params.id;

    const sql = 'DELETE FROM messages WHERE id = ?';
    db.query(sql, [messageId], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ success: false, message: 'Failed to delete message' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Message not found' });
        }
        res.status(200).json({ success: true, message: 'Message deleted successfully' });
    });
});

// Route to answer a consultation message
app.put('/konsultasi/messages/:id/answer', (req, res) => {
    const messageId = req.params.id;
    const { answer } = req.body;

    // Validasi input
    if (!answer) {
        return res.status(400).json({ success: false, message: 'Answer is required' });
    }

    const sql = 'UPDATE messages SET answer = ? WHERE id = ?';
    db.query(sql, [answer, messageId], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ success: false, message: 'Failed to update message' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Message not found' });
        }
        res.status(200).json({ success: true, message: 'Message answered successfully' });
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
