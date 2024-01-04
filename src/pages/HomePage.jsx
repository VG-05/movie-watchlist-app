import LoadMoreBtn from "../components/load-more-btn";
import MoviesDiscover from "../components/movies-discover";
import Navbar from "../components/navbar";

export default function HomePage({ movies, bookmarked, toggleBookmark, setCurrentPage }) {
    return (
        <>
            <Navbar homePage={true} watchlistPage={false} />
            <MoviesDiscover movies={movies} bookmarked={bookmarked} toggleBookmark={toggleBookmark} />
            <LoadMoreBtn setCurrentPage={setCurrentPage} />
        </>
    )
}