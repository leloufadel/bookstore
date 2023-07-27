import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';
import classes from './Book.module.css';
import CircularProgress from './CircularProgress';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <li className={classes.listContainer}>
      <div>
        <div className={classes.items}>
          <p className={classes.firstPara}>{book.category}</p>
          <h2>{book.title}</h2>
          <p className={classes.secondPara}>{book.author}</p>
        </div>
        <div className={classes.actionBtn}>
          <button type="button">Comments</button>

          <button onClick={() => handleRemoveBook(book.item_id)} type="button">
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={classes.progress}>
        <CircularProgress />
        <p>64%</p>
        <p>Completed</p>
      </div>
      <div>
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button className={classes.btnupdate} type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
