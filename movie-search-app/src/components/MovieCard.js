import React from "react";

function MovieCard({ movie }) {
   return (
      <div className="movie-card">
         <h3>{movie.Title}</h3>
         <img src={movie.Poster} alt={movie.Title} />
         <p>Year: {movie.Year}</p>
      </div>
   );
}

export default MovieCard;
