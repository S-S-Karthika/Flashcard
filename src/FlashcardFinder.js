import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const FlashcardFinder = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    // Fetch categories from the backend
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/categories');
                setCategories(response.data);
            } catch (error) {
                console.error("There was an error fetching the categories!", error);
            }
        };

        fetchCategories();
    }, []);

    // Fetch flashcards based on selected category from the backend
    useEffect(() => {
        const fetchFlashcards = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/flashcards?category=${selectedCategory}`);
                setFlashcards(response.data);
                setCurrentIndex(0);
            } catch (error) {
                console.error("There was an error fetching the flashcards!", error);
            }
        };

        if (selectedCategory) {
            fetchFlashcards();
        }
    }, [selectedCategory]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleFlip = () => setFlipped(!flipped);

    const handleNext = () => {
        setFlipped(false);
        setCurrentIndex((currentIndex + 1) % flashcards.length);
    };

    const handlePrev = () => {
        setFlipped(false);
        setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Flashcard Learning Tool</h1>
            </header>

            <div className="category-filter">
                <label htmlFor="category">Choose a category:</label>
                <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flashcard-container">
                {flashcards.length > 0 ? (
                    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
                        <div className="flashcard-inner">
                            <div className="flashcard-front">
                                <p>{flashcards[currentIndex].question}</p>
                            </div>
                            <div className="flashcard-back">
                                <p>{flashcards[currentIndex].answer}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading flashcards...</p>
                )}
            </div>

            <div className="navigation-buttons">
                <button onClick={handlePrev} disabled={flashcards.length === 0}>
                    Previous
                </button>
                <button onClick={handleNext} disabled={flashcards.length === 0}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default FlashcardFinder;
