import { useEffect, useState } from "react"
import MovieCard from "./components/movie-card"
import Navbar from "./components/navbar"
export default function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let page = 1;
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=d1c9e7f242991749c4f5c56cc8c8a7e8&page=${page}`;
    fetch(url).then(res => res.json())
      .then(movies => setMovies(movies.results))
      .catch(err => console.log(err))
  })

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
    </div>
  )
}

