export default function LoadMoreBtn({ setCurrentPage }) {
    function handleLoadMore() {
        setCurrentPage(prevPage => prevPage + 1);
    }
    return (
        <div className="d-flex justify-content-center">
            <button className="btn btn-outline-light my-5" type="button" title="Load more movies" onClick={handleLoadMore}>Load More</button>
        </div>
    )


}