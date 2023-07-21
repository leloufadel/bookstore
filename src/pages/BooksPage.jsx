import React from 'react';
import classes from './BooksPage.module.css';
import BookList from '../components/BookLists/BookList';
import BookInput from '../components/BookInput/BookInput';

const BooksPage = () => (
  <div className={classes.BookPageContainer}>
    <BookList />
    <BookInput />
  </div>
);

export default BooksPage;
