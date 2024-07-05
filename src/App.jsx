import { useEffect, useState } from "react"
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchlistPage from "./pages/WatchlistPage";
import HomePage from "./pages/HomePage";



export default function App() {

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarked, setBookmarked] = useState(JSON.parse(localStorage.getItem("bookmarkedMovies")) || {});
  const apiKey = import.meta.env.VITE_API_KEY;

  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}`;
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



  function toggleBookmark(movieID) {
    setBookmarked(prevState => ({
      ...prevState, ...{ [movieID]: !prevState[movieID] }
    }))
  }

  useEffect(() => {
    localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarked))
  }, [bookmarked])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage movies={movies} bookmarked={bookmarked} toggleBookmark={toggleBookmark} setCurrentPage={setCurrentPage} />
    },
    {
      path: "/watchlist",
      element: <WatchlistPage bookmarked={bookmarked} toggleBookmark={toggleBookmark} />
    },
    { 
      basename: import.meta.env.DEV ? '/' : '/movie-watchlist-app/'
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

