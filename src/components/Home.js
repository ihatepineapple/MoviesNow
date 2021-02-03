import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=bfe43e50&i=tt3896198`)
        .then(movieResults => setMovies(movieResults.data))
        .catch(error => console.log(`${error}`))
    }, []);

        console.log(movies.length)

    return (
        <div>
            <NavBar /> 

            <div>

            </div>
        </div>
    )
}

export default Home
