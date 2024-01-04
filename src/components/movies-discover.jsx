import MovieCard from "./movie-card"

export default function MoviesDiscover({ movies, bookmarked, toggleBookmark }) {
    return (
        <div className="container-lg p-0 my-3">
            <div className="row">
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} movieName={movie.title}
                        posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        isBookmarked={bookmarked[movie.id]}
                        toggleBookmark={() => toggleBookmark(movie.id)} />
                })}
            </div>
        </div>
    )
}