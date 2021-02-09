import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getRandomMovies();
    }, []);

        

    const getRandomMovies = async () => {
        // let randomId = Math.floor(Math.random() * 8999999 + 1000000);
        // let response = await axios.get(`http://www.omdbapi.com/?apikey=bfe43e50&i=tt${randomId}`);
        // await axios.get(`https://api.themoviedb.org/3/movie/${randomId}?api_key=${process.env.REACT_APP_API_KEY}`)
        // key = 5dc495d6de67ac6c732b3a2a73669a4b
        
        // let response = await axios.get(`http://www.omdbapi.com/?apikey=22990c51&s=batman`);
        // console.log(response.data.Search);
        // setMovies(response.data.Search);

        // do { 
        //     // let randomId = Math.floor(Math.random() * ((10000-100)+1) + 100);

        //     await axios.get(`http://www.omdbapi.com/?apikey=22990c51&s=batman`)
        //         .then(response => console.log(response.data));
        //         .catch(error => console.log(`${error}`));    
            
        // } while (randomMoviesArray.length < 9) 
        // setMovies(randomMoviesArray);
        // console.log(movies);

       
        let randomMoviesArray = [];

        for ( let i = 0; i < 9; i++) { 
            const inicialArray = ["batman", "pulp fiction", "watchmen", "spirited away", "moonrise kingdom", "fight club", "drive", "i tonya", "memento" ];
            let randomQuery = inicialArray[i];
            let response = await axios.get(`http://www.omdbapi.com/?apikey=22990c51&t=${randomQuery}`);
            randomMoviesArray.push(response.data)
        }
        console.log(randomMoviesArray)
        setMovies(randomMoviesArray)
        // let response = await axios.get(`http://www.omdbapi.com/?apikey=22990c51&t=batman`);
        // console.log(response.data);
        // setMovies(response.data);
           
    }

    
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
                                <h2>{movie.Director}</h2>
                                <div><p>{movie.overview}</p></div>
                                <div>
                                    <h2>{movie.imdbRating}</h2>
                                    <div>
                                        <p>{movie.Runtime}utes</p><br/>
                                        <p>Release year: {movie.Year}</p>
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
