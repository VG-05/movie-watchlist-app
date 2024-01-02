import { useEffect, useState } from "react"
import MovieCard from "./components/movie-card"
import Navbar from "./components/navbar"
import "./App.css"
export default function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=d1c9e7f242991749c4f5c56cc8c8a7e8&page=${currentPage}`;
  useEffect(() => {

    fetch(url).then(res => res.json())
      .then(data => setMovies(prevMovies => [...prevMovies, ...data.results]))
      .catch(err => console.error("Error fetching data: ", err))
  }, [url, currentPage])

  function handleLoadMore() {
    setCurrentPage(prevPage => prevPage + 1);
  }

  return (
    <div className="bg-black">
      <Navbar />
      <div className="container-lg p-0 my-3">
        <div className="row">{movies.map((movie) => {
          return (<MovieCard movieName={movie.title}
            posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />);
        })}
        </div>
      </div>
      <button id="load-more-button" class="btn btn-outline-light" type="button" title="Load more movies" onClick={handleLoadMore}>Load More</button>
    </div>
  )
}

