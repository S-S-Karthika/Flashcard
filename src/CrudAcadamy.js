import axios from 'axios';

const API_URL = 'http://localhost:5000/api/flashcards';

// Retrieve all flashcards
export const getFlashcards = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the flashcards!", error);
    }
};

// Add a new flashcard
export const addFlashcard = async (newFlashcard) => {
    try {
        const response = await axios.post(API_URL, newFlashcard);
        return response.data;
    } catch (error) {
        console.error("There was an error adding the flashcard!", error);
    }
};

// Update an existing flashcard
export const updateFlashcard = async (id, updatedFlashcard) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedFlashcard);
        return response.data;
    } catch (error) {
        console.error("There was an error updating the flashcard!", error);
    }
};

// Delete a flashcard
export const deleteFlashcard = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("There was an error deleting the flashcard!", error);
    }
};
