import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}){
  return (
    <div className='Movie'>
      <div className='Movie_Columns'>
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className='Movie_Columns'>
        <h1>{title}</h1>
        <div className='Movie_Genres'>
          {genres.map((genre, i)=>{
            return <MovieGenre genre={genre} key={i} />
          })}
        </div>
        <p className='Movie_Synopsis'>{synopsis}</p>
      </div>
    </div>
  )
}

// 함수 콤포넌트
function MoviePoster({poster, alt}){
  return <img src={poster} alt={alt} className='Movie_Poster' />
}

function MovieGenre({genre}){
  return (
    <span className='Movie_Genres'>{genre} </span>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  synopsis: PropTypes.string.isRequired
}


export default Movie;
