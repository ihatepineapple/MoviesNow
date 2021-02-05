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
        // key = 5dc495d6de67ac6c732b3a2a73669a4b
        let randomMoviesArray = [];
        
        
            let i = 0;
            while ( i < 9) 
                { for ( i = 0; i < 10; i++ ) {
                let randomId = Math.floor(Math.random() * ((1000-100)+1) + 100);

                await axios.get(`https://api.themoviedb.org/3/movie/${randomId}?api_key=${process.env.REACT_APP_API_KEY}`)
                    .then(response => randomMoviesArray.push(response.data))
                    .catch(error => console.log(`${error}`));    
            } 
        }
        setMovies(randomMoviesArray);
        console.log(movies);
           
    }

    
    return (
        <div>
            <NavBar /> 

            {(movies.length === 9) ?
                movies.map((movie, index) => {
                    return(
                        <div key={index}>
                            <h1>{movie.original_title}</h1>
                            <p>{index}</p>
                        </div>
                    )
                })
                :
                <div>
                <p>Loading movies, be patient</p>
                <button onClick={getRandomMovies}>Retry</button>
                </div>
            }

            
        </div>
    )
}

export default Home
