import React from 'react';
import classes from './BookList.module.css';
import Book from '../Book/Book';

const BookList = () => (
  <ul className={classes.bookListContainer}>
    <Book />
    <Book />
  </ul>
);

export default BookList;
