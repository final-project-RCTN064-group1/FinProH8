const Card = ({ movie }) => {
    return (
    <div className="card">
        <img src="{movie.Poster}" alt="{movie.Title}" />
        <div className="card-body">
            <h3>Title</h3>
        </div>
    </div>
    );
}

export default Card;