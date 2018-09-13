import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {
//   // 데이터 타입채크.필수속성유무(required)
//   static propTypes = {
//       title: PropTypes.string.isRequired,
//       poster: PropTypes.string.isRequired
//   }
//
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <MoviePoster post={this.props.poster} />
//       </div>
//     )
//   }
// }
function Movie({title, poster}){
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  )
}


// 클래스 콤포넌트
// class MoviePoster extends Component {
//
//   static propTypes = {
//       post: PropTypes.string.isRequired
//   }
//
//   render(){
//     return(
//       <img src={this.props.post} />
//     )
//   }
// }

// 함수 콤포넌트
function MoviePoster({poster}){
  return <img src={poster} alt='Movie Poster' />
}



export default Movie;
