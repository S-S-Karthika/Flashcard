const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'karthika@123',
    database: 'flashcards_db'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL connected');
});

// Fetch all flashcards, optionally filtered by category
app.get('/api/flashcards', (req, res) => {
    const { category } = req.query;
    let query = 'SELECT * FROM flashcards';
    let params = [];

    if (category) {
        query += ' WHERE category = ?';
        params.push(category);
    }

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error fetching flashcards:', err);
            return res.status(500).send('Error fetching flashcards');
        }
        res.json(results);
    });
});

// Fetch all categories
app.get('/api/categories', (req, res) => {
    db.query('SELECT DISTINCT category FROM flashcards', (err, results) => {
        if (err) {
            console.error('Error fetching categories:', err);
            return res.status(500).send('Error fetching categories');
        }
        const categories = results.map(row => row.category);
        res.json(categories);
    });
});

app.post('/api/flashcards', (req, res) => {
    const { question, answer, category } = req.body;
    if (!question || !answer || !category) {
        return res.status(400).send('Question, answer, and category are required');
    }
    db.query(
        'INSERT INTO flashcards (question, answer, category) VALUES (?, ?, ?)',
        [question, answer, category],
        (err, result) => {
            if (err) {
                console.error('Error adding flashcard:', err);
                return res.status(500).send('Error adding flashcard');
            }
            res.status(201).send({ id: result.insertId, question, answer, category });
        }
    );
});

app.put('/api/flashcards/:id', (req, res) => {
    const { id } = req.params;
    const { question, answer, category } = req.body;
    if (!question || !answer || !category) {
        return res.status(400).send('Question, answer, and category are required');
    }
    db.query(
        'UPDATE flashcards SET question = ?, answer = ?, category = ? WHERE id = ?',
        [question, answer, category, id],
        (err, result) => {
            if (err) {
                console.error('Error updating flashcard:', err);
                return res.status(500).send('Error updating flashcard');
            }
            res.status(200).send({ id, question, answer, category });
        }
    );
});

app.delete('/api/flashcards/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM flashcards WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error('Error deleting flashcard:', err);
            return res.status(500).send('Error deleting flashcard');
        }
        res.status(200).send({ id });
    });
});


// crud operation

app.get('/api/flashcards', (req, res) => {
    db.query('SELECT * FROM flashcards', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.post('/api/flashcards', (req, res) => {
    const { question, answer } = req.body;
    db.query('INSERT INTO flashcards (question, answer) VALUES (?, ?)', [question, answer], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.put('/api/flashcards/:id', (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;
    db.query('UPDATE flashcards SET question = ?, answer = ? WHERE id = ?', [question, answer, id], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.delete('/api/flashcards/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM flashcards WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
