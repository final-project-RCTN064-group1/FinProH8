import Card from "../MovieCard";

const Movies = () => {
  return (
    <div className="container mt-3">
      <h1>Show your favorite Movies</h1>
        <div className="row row-cols-4">
            <div className="col pb-3">
                <Card />
            </div>
            <div className="col pb-3">
                <Card />
            </div>
            <div className="col pb-3">
                <Card />
            </div>
            <div className="col pb-3">
                <Card />
            </div>
            <div className="col pb-3">
                <Card />
            </div>
            <div className="col pb-3">
                <Card />
            </div>
            <div className="col pb-3">
                <Card />
            </div>
        </div>
    </div>
  );
};

export default Movies;
