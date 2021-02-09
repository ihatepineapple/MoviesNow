import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import '../assets/stylesheets/style.css';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Icon from '@mdi/react'
import { mdiFilmstripBox, mdiTimerOutline } from '@mdi/js';

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getRandomMovies();
    }, []);

    const getRandomMovies = async () => {
        let randomMoviesArray = [];

        for ( let i = 0; i < 9; i++) { 
            let initialArray = ["batman", "pulp fiction", "watchmen", "spirited away", "moonrise kingdom", "fight club", "drive", "i tonya", "memento" ];
            let randomQuery = initialArray[i];
            let response = await axios.get(`http://www.omdbapi.com/?apikey=22990c51&t=${randomQuery}`);
            randomMoviesArray.push(response.data);
        };
        console.log(randomMoviesArray);
        setMovies(randomMoviesArray);      
    };

    
    
    return (
        <div>
            <NavBar /> 

            <div className="movies-wrapper">
            {movies.map((movie, index) => {
                    return(
                        <div key={index} className="movie-card">
                            <div className="movie-image-container">
                                <img src={movie.Poster} alt={movie.Title} /> 
                            </div>
                            <div className="movie-info">
                                <h1>{movie.Title}</h1>
                                <h2>  Dir: <b>{movie.Director}</b> ({movie.Year})</h2>
                                {/* <div><p>{movie.Plot}</p></div> */}
                                <div className="movie-data">
                                    <div className="ring">
                                        <CircularProgressbar
                                            percentage={movie.Metascore}
                                            text={`${movie.Metascore}%`}
                                            styles={{
                                                root: {
                                                    width: "90px",
                                                    height: "90px",
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
                                                    fontSize: "2.5em"
                                                }
                                            }}
                                        />
                                       
                                    </div>

                                    <div className="movie-numbers">
                                        <p> <Icon path={mdiTimerOutline}
                                            title="Time"
                                            size={0.8}
                                            color="black"
                                            className="icon"
                                           /> {movie.Runtime}utes</p>
                                        
                                        
                                        <p> <Icon path={mdiFilmstripBox}
                                            title="Filmstrip"
                                            size={0.8}
                                            color="black"
                                            className="icon"
                                           /> {movie.Genre}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            
        </div>
    )
}

export default Home
