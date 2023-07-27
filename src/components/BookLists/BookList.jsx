import React from 'react';
import { useSelector } from 'react-redux';
import classes from './BookList.module.css';
import Book from '../Book/Book';

const BookList = () => {
  const { books } = useSelector((state) => state.book);

  return (
    <ul className={classes.bookListContainer}>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </ul>
  );
};
export default BookList;
