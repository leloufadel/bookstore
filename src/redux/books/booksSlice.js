import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../helperapi/helperapi';

const initialState = {
  books: [],
  status: 'idle',
  error: 'no',
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await axios.get(API_URL);

  const bookDetail = [];
  const bookValue = Object.values(res.data);
  const bookKey = Object.keys(res.data);
  bookValue.forEach((data) => {
    bookDetail.push(data[0]);
  });
  const finalData = bookDetail.map((file, i) => {
    file.item_id = bookKey[i];
    return file;
  });
  return finalData;
});

export const sendBook = createAsyncThunk('books/sendBook', async (newBook) => {
  const res = await axios.post(API_URL, newBook);
  return res.data;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`, { item_id: id });
  return res.data;
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
        state.status = 'Loading books...';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books.push(...action.payload);
        state.status = 'Books loaded';
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'idle';
        if (action.payload) {
          // If a payload was provided, it means an error occurred and it contains the error message
          state.error = action.payload.error;
        } else {
          state.error = action.error;
        }
      })
      .addCase(sendBook.pending, (state) => {
        state.status = 'Sending Your book...';
      })
      .addCase(sendBook.fulfilled, (state, action) => {
        state.status = `Book is ${action.payload}`;

        state.status = '';
      })
      .addCase(sendBook.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = 'Deleting request is sending... ';
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = action.payload;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
