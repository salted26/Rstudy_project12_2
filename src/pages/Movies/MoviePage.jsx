import React from 'react';
import {Link} from "react-router-dom";
import './MoviePage.style.css'

const MoviePage = () => {
    return (
        <div>
            <h3>Movie Page</h3>
            <p><Link to="/">HomePage</Link></p>
            <p><Link to="/movies/:id">MovieDetail</Link></p>
        </div>
    );
};

export default MoviePage;