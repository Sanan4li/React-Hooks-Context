import React, {useContext} from 'react'
import {BooksContext} from "../Contexts/BooksContextProvider";
function BookDetail({book}) {
    const {dispatch} = useContext(BooksContext)
    return (
        <div>
            <div style={{padding:"10px", background:"#333", margin:"10px", borderRadius:10}}>
                <div className="title"><p>{book.title}</p></div>
                <div className="author" style={{color:"#bbb"}}><p>by {book.author} <button style={{background:"red", borderStyle:"none", padding:5, color:"white", borderRadius:5}}  onClick={()=>dispatch({type:"DELETE_BOOK",book:{id:book.id}})}>Delete</button> </p></div>
            </div>
        </div>
    )
}

export default BookDetail
