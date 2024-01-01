export default function MovieCard({ movieName, posterUrl, bookmarked, setBookmarked }) {
    return (
        <div className="card text-bg-dark mb-3 d-inline-block" style={{ maxWidth: "345px" }}>
            <img src={posterUrl} alt={movieName} className="card-img" />
            <div className="card-img-overlay"><button className="btn btn-dark" type="button" onClick={() => setBookmarked(!bookmarked)}>{bookmarked ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>}</button></div>
        </div>
    )
}

