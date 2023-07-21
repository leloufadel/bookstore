import React from 'react';
import classes from './Book.module.css';
import CircularProgress from './CircularProgress'; 

const Book = () => (
<div className={classes.listContainer}>
   <div  className={classes.items} >
    <p className={classes.firstPara} >Action</p>
    <h2>The  Hunger Game </h2>
    <p className={classes.secondPara} >Suzanne Collins</p>
 
   <div className={classes.actionBtn}> 
   <button type='button'>Comment</button>
   <button type='button'>Remove</button>
   <button type='button'>Edit</button>
   </div>
   </div>
   <div className={classes.progress}>
      <p><CircularProgress /></p> 
      <p>64%</p>
      <p>Completed</p>
    </div>
     <div>
      <p>Current Chapter</p>
      <p>Chapter 17</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
</div>
 );


export default Book;
