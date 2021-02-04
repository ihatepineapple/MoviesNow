import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getRandomMovies();
    }, []);

        

    const getRandomMovies = async () => {
        
        // let { data } = response.data
        // setMovies(response.data)

        // create new empty array
        // define a random key value
        // call axios with random variable on id
        // push response into empty array until array .length is 8
        let randomMoviesArray = [];
        // let randomId = Math.floor(Math.random() * 8999999 + 1000000);

            while (randomMoviesArray.length < 8) {
            
            for ( let i = 0; i < 8; i++ ) {
                let randomId = Math.floor(Math.random() * 8999999 + 1000000);
                let response = await axios.get(`http://www.omdbapi.com/?apikey=bfe43e50&i=tt${randomId}`);
                let data  = response.data;
                
                if ( data.Response !== "False" && randomMoviesArray.length < 8) { 
                    randomMoviesArray.push(data)};
                
            }
        }

        setMovies(randomMoviesArray)
        return movies
    }

    
    return (
        <div>
            <NavBar /> 

            {(movies.length === 8) ?
                movies.map((movie, index) => {
                    return(
                        <div key={index}>
                            <h1>{movie.Title}</h1>
                        </div>
                    )
                })
                :
                <p>Loading movies, be patient</p>
            }

            
        </div>
    )
}

export default Home
