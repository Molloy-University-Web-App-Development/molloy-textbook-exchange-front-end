import React from "react";
import "./BookList.css";
const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.isbn} className="book">
          <img src={book.image} alt={book.title} className="book-image" />
          <div className="book-details">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-isbn">ISBN: {book.isbn}</p>
            <p className="book-author">Author: {book.author}</p>
            <p className="book-category">Category: {book.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
