import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const MovieDetails = (props) => {
    const [detailMovie, setDetailMovie] = useState();
    let movieData = props.match.params.id;

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=22990c51&i=${movieData}`)
        .then(movieDB => {setDetailMovie(movieDB.data)})
        .catch(error => console.log(`${error}`))
    }, []);

    return (
        <div>
            <NavBar />

            <div className="single-box">
                <div className="container-btn">
                <Link to="/" className="button">Go Back</Link>
                </div>

            { detailMovie && (
                <div className="movies-wrapper">
                    <div className="single-movie-container">
                            <div className="single-movie-image-container">
                                <img src={detailMovie.Poster} alt={detailMovie.Title} /> 
                            </div>

                            <div className="single-movie-info">
                                <h1>{detailMovie.Title}</h1>

                                <div className="detail-control">
                                    <h3 className="category">Directed by:</h3>
                                    <h3 className="content">{detailMovie.Director}</h3>
                                </div>
                                <div className="detail-control">
                                    <h3 className="category">Writers:</h3>
                                    <h3 className="content">{detailMovie.Writer}</h3>
                                </div>
                                <div className="detail-control">
                                    <h3 className="category">Genre:</h3>
                                    <h3 className="content">{detailMovie.Genre}</h3>
                                </div>
                                <div className="detail-control">
                                    <h3 className="category">Cast:</h3>
                                    <h3 className="content">{detailMovie.Actors}</h3>
                                </div>

                                <div className="single-movie-plot">{detailMovie.Plot}</div>

                                <div className="single-movie-extra-info">
                                    <div className="ring">
                                        <CircularProgressbar
                                            percentage={detailMovie.Metascore}
                                            text={`${detailMovie.Metascore}%`}
                                            styles={{
                                                root: {
                                                    width: "120px",
                                                    height: "120px",
                                                },
                                                path: {
                                                    stroke: `#50E3C2`,
                                                    strokeLinecap: 'butt',
                                                },
                                                trail: {
                                                    stroke: "rgba(170, 250, 235, 0.3)",
                                                },
                                                text: {
                                                    fontFamily: "IntroHeadH-Base",
                                                    fill: "black",
                                                    fontSize: "3em"
                                                }
                                            }}
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    )
}

export default MovieDetails
