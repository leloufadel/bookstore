import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../helperapi/helperapi';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const res = await axios.get(API_URL);
    const books = Object.keys(res.data).map((key) => ({
      item_id: key,
      ...res.data[key][0],
    }));
    return books;
  } catch (error) {
    throw Error('Failed to fetch books from the server.');
  }
});

export const sendBook = createAsyncThunk('books/sendBook', async (newBook) => {
  try {
    const res = await axios.post(API_URL, newBook);
    return res.data;
  } catch (error) {
    throw Error('Failed to send the book to the server.');
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    throw Error('Failed to delete the book from the server.');
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      const newBook = action.payload;
      state.books.push(newBook);
    },
    removeBook(state, action) {
      const id = action.payload;
      state.books = state.books.filter((book) => book.item_id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(sendBook.pending, (state) => {
        state.status = 'sending';
      })
      .addCase(sendBook.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(sendBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = 'deleting';
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
