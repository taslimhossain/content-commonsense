import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main>
            <div className="not-found">
                <img src="images/notfound.png" alt="404 not found"/>
                <h1>ERROR 404 NOT FOUND</h1>
                <p>You may have mis-typed the URL.Or the page has been removed. Actually, there is nothing to see here...Click on the links below to do something, Thanks!</p>
                <Link to="/" className='select-offer-btn'> Home</Link>
            </div>       
        </main>
    )
}

export default NotFound
