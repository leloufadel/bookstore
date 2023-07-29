import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, removeBook } from '../../redux/books/booksSlice';
import classes from './Book.module.css';
import CircularProgress from './CircularProgress';

const Book = ({
  category, title, author, itemId,
}) => {
  const dispatch = useDispatch();
  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <li className={classes.listContainer}>
      <div>
        <div className={classes.authorDetails}>
          <p className={classes.category}>{category}</p>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.author}>{author}</p>
        </div>
        <div className={classes.actionBtn}>
          <button type="button">Comments</button>
          <button onClick={() => handleRemoveBook(itemId)} type="button">
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
        <p className={classes.current_Chapter}>Current Chapter</p>
        <p className={classes.current_Lesson}>Chapter 17</p>
        <button className={classes.btnupdate} type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  itemId: PropTypes.string,
};

Book.defaultProps = {
  category: 'Nonfiction',
  title: '',
  author: '',
  itemId: 'item1',
};

export default Book;
