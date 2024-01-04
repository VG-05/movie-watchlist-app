import Navbar from "../components/navbar";
import Watchlist from "../components/watchlist";

export default function WatchlistPage({ bookmarked, toggleBookmark }) {
    return (
        <>
            <Navbar homePage={false} watchlistPage={true} />
            <Watchlist bookmarked={bookmarked} toggleBookmark={toggleBookmark} />
        </>
    )
}

