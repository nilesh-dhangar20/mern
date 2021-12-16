import React from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
const Error = () => {
    return (
        <div id="notfound" className="mt-5">
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>

            </div>
         <h2>We are sorry page not found</h2>
         <p className="mb-5">
             Lorem ipsum dolor sit amet consectetur.
         </p>
         <NavLink to="/">Back to HomePage</NavLink>
        </div>
            
        </div>
    )
}

export default Error;
