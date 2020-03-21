import React, {useContext} from 'react'
import {BooksContext} from "../Contexts/BooksContextProvider";
function NavBar() {
    const {books} = useContext(BooksContext);
    return (
        <div className="navbar">
            <h1>Top Books to Read in 2020</h1>
           {books.length>0? <p> Total {books.length} Books to Read. Get Your Books Now from <a style={{color:"wheat"}} href="htttp://www.pdfdrive.net"> Here</a> </p>: <p>No Book to Read!</p>}
        </div>
    )
}

export default NavBar
