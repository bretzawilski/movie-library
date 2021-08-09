import React from 'react';

export default function SearchMovie() {
  
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("Ugh!");
  }
  
  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">Movie Search</label>
      <input className="input" type="text" name="query" placeholder="Search for Movies..." />
      <button className="button" type="submit">Submit</button>
    </form>
  )
}