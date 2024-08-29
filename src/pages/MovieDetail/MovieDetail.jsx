import React from 'react';
import {Link} from "react-router-dom";
import './MovieDetail.style.css'

const MovieDetail = () => {
    return (
        <div>
            <h3>Movie Detail</h3>
            <p><Link to="/">HomePage</Link></p>
            <p><Link to="/movies">MoviePage</Link></p>
        </div>
    );
};

export default MovieDetail;