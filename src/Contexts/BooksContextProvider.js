import React, { createContext, useReducer, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { bookReducers } from './BookReducers';
export const BooksContext = createContext();
function BooksContextProvider(props) {
    const booksState = [
        {"id": "1", "title": "The Power of Habit", "author": "Charles Duhigg"},
        {"id": "2", "title": "Rich Dad Poor Dad", "author": "Robert Kiyusaki"},
        {"id": "3", "title": "Think and Grow Rich", "author": "Naploean Hill"},
        {"id": "4", "title": "The Lean Startup", "author": "Eric Ries"}
    ]
    const [books, dispatch] = useReducer(bookReducers, booksState, ()=>{
        const booksData = localStorage.getItem("books");
       return booksData?JSON.parse(booksData):booksState
    });
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books))
    }, [books]);
    return (
        <BooksContext.Provider value={{books,dispatch}}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider
