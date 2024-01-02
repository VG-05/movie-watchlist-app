import { useEffect } from "react";
import "./movie-card.css";

export default function MovieCard({ movieName, posterUrl, isBookmarked, toggleBookmark }) {
    return (
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
            <div className="card text-bg-dark border-0" id="movie-card">
                <img src={posterUrl} alt={movieName} className="card-img rounded-0" />
                <div className="card-img-overlay" id="bookmark-button"><button className="btn btn-dark" type="button" title="Save to watchlist" onClick={toggleBookmark}>{isBookmarked ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>}</button></div>
            </div>
        </div>

    )
}

