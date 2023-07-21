import React from 'react';
import classes from './BookInput.module.css';

const BookInput = () => (
  <form className={classes.form}>
    <h2>ADD NEW BOOK</h2>
    <div className={classes.inputs}>
      <input
        className={classes.bookInput}
        type="text"
        name=""
        id="bookInput"
        placeholder="Book title"
      />
      <input
        className={classes.authorInput}
        type="text"
        name=""
        placeholder="Author"
        id="authorInput"
      />
      <button type="submit">ADD BOOK</button>
    </div>
  </form>
);

export default BookInput;
