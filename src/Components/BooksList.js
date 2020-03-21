import React,  {useContext} from 'react'
import {BooksContext} from "../Contexts/BooksContextProvider";
import BookDetail from "./BookDetail";
function BooksList() {
    const {books} = useContext(BooksContext)
    return (
        <div style={{ padding:5}}>
            {books.length>0?
            <ul style={{listStyle:"none", padding:0,}}>
                {books.map(
                    (book)=>{
                        return(
                           <li key={book.id}> <BookDetail book={book}/></li>
                        )
                    }
                )}
            </ul> :
            <p style={{color:"white", background:"#333", padding:10}}>No Book Available! Please Add a New Book...</p>   
        }
        </div>
    )
}

export default BooksList
