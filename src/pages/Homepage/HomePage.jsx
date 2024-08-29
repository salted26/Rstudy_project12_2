import React from 'react';
import './Homepage.style.css'
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h3>Home Page</h3>
            <p><Link to="/movies">MoviePage</Link></p>
            <p><Link to="/movies/:id">MovieDetail</Link></p>
        </div>
    );
};

export default HomePage;