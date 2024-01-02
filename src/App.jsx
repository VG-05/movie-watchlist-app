import { useEffect, useState } from "react"
import MovieCard from "./components/movie-card"
import Navbar from "./components/navbar"
import "./App.css"
export default function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarked, setBookmarked] = useState(JSON.parse(localStorage.getItem("bookmarkedMovies")) || {});

  let url = `https://api.themoviedb.org/3/discover/movie?api_key=d1c9e7f242991749c4f5c56cc8c8a7e8&page=${currentPage}`;
  useEffect(() => {

    fetch(url).then(res => res.json())
      .then(data => {
        if (currentPage === 1) {
          setMovies(data.results)
        }
        else {
          setMovies(prevMovies => {
            const uniqueNewMovies = data.results.filter(newMovie => !prevMovies.some(prevMovie => prevMovie.id === newMovie.id));
            return [...prevMovies, ...uniqueNewMovies];
          })
        }
      })
      .catch(err => console.error("Error fetching data: ", err))
  }, [url, currentPage])

  function handleLoadMore() {
    setCurrentPage(prevPage => prevPage + 1);
  }

  function toggleBookmark(movieID) {
    setBookmarked(prevState => ({
      ...prevState, ...{ [movieID]: !prevState[movieID] }
    }))
  }

  useEffect(() => {
    localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarked))
  }, [bookmarked])

  return (
    <div className="bg-black">
      <Navbar />
      <div className="container-lg p-0 my-3">
        <div className="row">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movieName={movie.title}
              posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              isBookmarked={bookmarked[movie.id]}
              toggleBookmark={() => toggleBookmark(movie.id)} />
          }
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-light my-5" type="button" title="Load more movies" onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
  )
}

