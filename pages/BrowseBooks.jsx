import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(
    (book) =>
      book.category === category &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <h2>{category} Books</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BrowseBooks;
