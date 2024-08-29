import React from 'react';
import './Banner.style.css'
import {usePopularMoviesQuery} from "../../../../hooks/usePopularMovies";
import {Alert} from "react-bootstrap";

const Banner = () => {

    const {data, isLoading, isError, error} = usePopularMoviesQuery();

    console.log("data", data)

    const imageUrl = `https://image.tmdb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}`;

    if (isLoading) {
        <h5>Loading...</h5>
    }
    if (isError) {
        <Alert varian="danger">{error.message}</Alert>
    }
    return (
        <div className="banner-container" style={{backgroundImage:"url(" + `${imageUrl}` + ")"}} >
            <div className="title-container">
                <h1>{data?.results[0].title}</h1>
                <p>{data?.results[0].overview}</p>
            </div>
        </div>
    );
};


export default Banner;