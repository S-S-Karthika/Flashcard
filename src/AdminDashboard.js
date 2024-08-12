import React, { useState, useEffect } from 'react';
import { getFlashcards, addFlashcard, updateFlashcard, deleteFlashcard } from './CrudAcadamy';
import Footer from './Footer';

const FlashcardDashboard = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [newFlashcard, setNewFlashcard] = useState({ question: '', answer: '', category: '' });
    const [editingFlashcard, setEditingFlashcard] = useState(null);

    useEffect(() => {
        fetchFlashcards();
    }, []);

    const fetchFlashcards = async () => {
        const data = await getFlashcards();
        setFlashcards(data);
    };

    const handleAddFlashcard = async () => {
        await addFlashcard(newFlashcard);
        fetchFlashcards();
        setNewFlashcard({ question: '', answer: '', category: '' });
    };

    const handleUpdateFlashcard = async () => {
        if (editingFlashcard) {
            await updateFlashcard(editingFlashcard.id, editingFlashcard);
            fetchFlashcards();
            setEditingFlashcard(null);
        }
    };

    const handleDeleteFlashcard = async (id) => {
        await deleteFlashcard(id);
        fetchFlashcards();
    };

    return (
        <div id="flashcard-dashboard">
            <h2>Flashcard Dashboard</h2>
            
            {/* Add Flashcard */}
            <div>
                <h3>Add New Flashcard</h3>
                <input
                    type="text"
                    placeholder="Question"
                    value={newFlashcard.question}
                    onChange={(e) => setNewFlashcard({ ...newFlashcard, question: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Answer"
                    value={newFlashcard.answer}
                    onChange={(e) => setNewFlashcard({ ...newFlashcard, answer: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={newFlashcard.category}
                    onChange={(e) => setNewFlashcard({ ...newFlashcard, category: e.target.value })}
                />
                <button onClick={handleAddFlashcard}>Add Flashcard</button>
            </div>

            {/* Edit Flashcard */}
            {editingFlashcard && (
                <div>
                    <h3>Edit Flashcard</h3>
                    <input
                        type="text"
                        value={editingFlashcard.question}
                        onChange={(e) => setEditingFlashcard({ ...editingFlashcard, question: e.target.value })}
                    />
                    <input
                        type="text"
                        value={editingFlashcard.answer}
                        onChange={(e) => setEditingFlashcard({ ...editingFlashcard, answer: e.target.value })}
                    />
                    <button onClick={handleUpdateFlashcard}>Update Flashcard</button>
                </div>
            )}

            {/* List of Flashcards */}
            <div>
                <h3>Flashcards List</h3>
                <ul id="flashcard-list">
                    {flashcards.map(flashcard => (
                        <li key={flashcard.id}>
                            <strong>Q:</strong> {flashcard.question} <br />
                            <strong>A:</strong> {flashcard.answer} <br />
                            <button onClick={() => setEditingFlashcard(flashcard)}>Edit</button>
                            <button onClick={() => handleDeleteFlashcard(flashcard.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default FlashcardDashboard;
