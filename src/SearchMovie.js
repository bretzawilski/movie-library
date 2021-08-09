import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    // const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=4e4797303ef9126a777d3583757025f2&language=en-US&query=${query}&page=1&include_adult=false`;

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => console.log(data))

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(e) {
    setQuery(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>

      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
