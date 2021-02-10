import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import NavBar from "./NavBar";
import SearchBar from "./Searchbar";
import '../assets/stylesheets/style.css';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Icon from '@mdi/react'
import { mdiFilmstripBox, mdiTimerOutline } from '@mdi/js';

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchState, setSearchState] = useState(false);
    const [inputMovies, setInputMovies] = useState([]);
    let resultMovies = [];

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
        setMovies(randomMoviesArray);      
    };

    const handleFilterMovies = async(searchInput) => {
       
        let response = await axios.get(`http://www.omdbapi.com/?apikey=22990c51&s=${searchInput}`);
        console.log(response.data)
        resultMovies.push(response.data.Search);
        console.log(resultMovies)
        
        setInputMovies(...resultMovies);
        console.log(inputMovies);
        setSearchState(true);
    };
    
    return (
        <div >
            <NavBar /> 
            <SearchBar handleFilterSearch={handleFilterMovies}/> 
            <div className="content-box">
            <div className="movies-wrapper">

            { searchState && inputMovies ?
                inputMovies.map((movie, index) => {
                    return(
                        <div key={index} className="movie-card">
                            <div className="movie-image-container">
                                <img src={movie.Poster} alt={movie.Title} /> 
                            </div>
                            <div className="movie-info">
                                <Link to={`/${movie.imdbID}`}><h1>{movie.Title}</h1></Link>
                                <h2> {movie.Year}</h2>
                            </div>
                        </div>
                    )
                })
            : 
                movies.map((movie, index) => {
                    return(
                        <div key={index} className="movie-card">
                            <div className="movie-image-container">
                                <img src={movie.Poster} alt={movie.Title} /> 
                            </div>
                            <div className="movie-info">
                                <Link to={`/${movie.imdbID}`}><h1>{movie.Title}</h1></Link>
                                <h2>  Dir: <b>{movie.Director}</b> ({movie.Year})</h2>
                                <div className="movie-plot">{movie.Plot}</div>
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
                                            color="#2E2E2F"
                                            className="icon"
                                           /> {movie.Runtime}utes</p>
                                        
                                        
                                        <p> <Icon path={mdiFilmstripBox}
                                            title="Filmstrip"
                                            size={0.8}
                                            color="#2E2E2F"
                                            className="icon"
                                           /> {movie.Genre}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            </div>
            
        </div>
    )
}

export default Home
