import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, sendBook } from '../../redux/books/booksSlice';
import classes from './BookInput.module.css';

const BookInput = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [authorName, setAuthorName] = useState('');

  const dispatch = useDispatch();
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!bookTitle || !authorName) return;
    const newBook = {
      item_id: crypto.randomUUID(),
      title: bookTitle,
      author: authorName,
      category: 'Nonfiction',
    };
    dispatch(addBook(newBook));
    dispatch(sendBook(newBook));

    setAuthorName('');
    setBookTitle('');
  };

  return (
    <form className={classes.form} onSubmit={handleAddBook}>
      <h2>ADD NEW BOOK</h2>
      <div className={classes.inputs}>
        <input
          className={classes.bookInput}
          type="text"
          name=""
          id="bookInput"
          placeholder="Book title"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <input
          className={classes.authorInput}
          type="text"
          name=""
          placeholder="Author"
          id="authorInput"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};
export default BookInput;
