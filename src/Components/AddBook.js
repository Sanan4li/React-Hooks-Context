import React, {useContext, useState} from 'react'
import {BooksContext} from '../Contexts/BooksContextProvider'

function AddBook() {
const {dispatch} = useContext(BooksContext)
const [title, setTitle] = useState("");
const [author, setAuthor] = useState("");
const addNewBook = (e)=>{
    e.preventDefault();
    setTitle("");
    setAuthor("");
    dispatch({type: "ADD_BOOK", book:{
        title,
        author
    }});
    
}
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Add New Book</h1>
            <form onSubmit={addNewBook}>
                <input type="text" placeholder="Book Title" value={title} required onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" placeholder="Author" value={author} required onChange={(e)=>setAuthor(e.target.value)}/>
                <input type="submit" value="Add Book"/>
            </form>
        </div>
    )
}

export default AddBook
