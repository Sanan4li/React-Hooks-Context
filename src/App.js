import React from 'react';
import './App.css';
import BooksContextProvider from './Contexts/BooksContextProvider';
import NavBar from './Components/NavBar';
import BooksList from './Components/BooksList';
import AddBook from './Components/AddBook';

function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <NavBar/>
        <BooksList/>
        <AddBook/>
      </BooksContextProvider>
    </div>
  );
}

export default App;
