import React from 'react';
import './Banner.style.css'
import {usePopularMoviesQuery} from "../../../../hooks/usePopularMovies";
import {Alert} from "react-bootstrap";

const Banner = () => {

    const {data, isLoading, isError, error} = usePopularMoviesQuery();

    console.log("data", data)

    const image = `https://image.tmdb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}`;
    const url = "url(" + image + ")";

    if (isLoading) {
        return (
            <div>
                <h5>Loading...</h5>
            </div>
        )
    }
    if (isError) {
        return (
            <div>
                <Alert varian="danger">{error.message}</Alert>
            </div>
        )
    }
    return (
        <div className="banner-container" style={{backgroundImage:url}} >
            <div className="title-container">
                <h1>{data?.results[0].title}</h1>
                <p>{data?.results[0].overview}</p>
            </div>
        </div>
    );
};


export default Banner;