import { useState } from "react"
import MovieCard from "./components/movie-card"
import Navbar from "./components/navbar"
export default function App() {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <>
      <Navbar />
      <MovieCard movieName="Avengers"
        posterUrl="C:\Users\vishe\OneDrive - University of Waterloo\Desktop\movie watchlist app\src\assets\example.jpeg"
        bookmarked={bookmarked}
        setBookmarked={setBookmarked} />

    </>
  )
}

