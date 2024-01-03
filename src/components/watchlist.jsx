import { useEffect, useState } from "react";
import Navbar from "./navbar";
import MovieCard from "./movie-card";

export default function Watchlist({ bookmarked, toggleBookmark }) {
    const [movieDetails, setMovieDetails] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;
    let bookmarkedMovies = Object.entries(bookmarked).filter(([key, value]) => value === true);
    bookmarkedMovies = bookmarkedMovies.map(([key, value]) => parseInt(key));
    useEffect(() => bookmarkedMovies.forEach((movieID) => fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => setMovieDetails(prevState => {
            let movies = [...prevState, data];
            movies.filter(movie => !prevState.some(prevMovie => prevMovie.id === movie.id));
            return movies;
        }))
        .catch(err => console.err("Error fetching data:", err))), []);

    useEffect(() => console.log(movieDetails), [movieDetails]);

    return (
        <div className="bg-black">
            <Navbar />
            <div className="container-lg p-0 my-3">
                <div className="row">
                    {movieDetails.map(movie => {
                        return <MovieCard key={movie.id} movieName={movie.title}
                            posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            isBookmarked={bookmarked[movie.id]}
                            toggleBookmark={() => toggleBookmark(movie.id)} />
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

