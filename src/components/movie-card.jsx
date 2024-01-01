import "C:/Users/vishe/OneDrive - University of Waterloo/Desktop/movie watchlist app/src/App.css";

export default function MovieCard({ movieName, posterUrl, bookmarked, setBookmarked }) {
    return (
        <div className="movie-card">
            <img src={posterUrl} alt={movieName} className="movie-poster" />
            <div className="overlay"><button type="button" onClick={() => setBookmarked(!bookmarked)}>{bookmarked ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>}</button></div>
        </div>
    )
}