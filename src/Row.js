import React, {useEffect, useState} from 'react';
import './Row.css';
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        //if [], run once when row loads, and don't run again\
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl]);

    console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>


        </div>
    )
}

export default Row;