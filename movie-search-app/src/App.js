import React, { useState } from "react";

function MovieSearch() {
   const [movie, setMovie] = useState("");
   const [movieData, setMovieData] = useState(null);
   const [error, setError] = useState(null);

   const handleSearch = async () => {
      setError(null); 
      try {
         const response = await fetch(
            `https://www.omdbapi.com/?apikey=bb44bbd6&t=${encodeURIComponent(
               movie
            )}`
         );
         if (response.ok) {
            const data = await response.json();
            if (data.Response === "True") {
               setMovieData(data);
            } else {
               setError(data.Error);
            }
         } else {
            setError(`Ошибка HTTP! Статус: ${response.status}`);
         }
      } catch (error) {
         setError(`Ошибка сети: ${error.message}`);
      }
   };

   return (
      <div>
         <input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            placeholder="Введите название фильма"
         />
         <button onClick={handleSearch}>Поиск</button>
         {error && <p>Ошибка: {error}</p>}
         {movieData && !error && (
            <div>
               <h3>{movieData.Title}</h3>
               <p>{movieData.Plot}</p>
               <p>Рейтинг: {movieData.imdbRating}</p>
            </div>
         )}
      </div>
   );
}

export default MovieSearch;
