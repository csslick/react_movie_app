import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movies = [
//     {
//       title: 'Matrix',
//       poster: 'http://placehold.it/300x150/f80'
//     },
//     {
//       title: 'Full Metal Jacket',
//       poster: 'http://placehold.it/300x150/8f0'
//     },
//     {
//       title: 'Oldboy',
//       poster: 'http://placehold.it/300x150/f86'
//     },
//     {
//       title: 'Star Wars',
//       poster: 'http://placehold.it/300x150/68f'
//     }
// ]

class App extends Component {

  state = {
      greeting: 'Hello!',
  }

  componentWillMount(){
    console.log('will mount');
    console.log('this.state: ', this.state.greeting);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies: [
            {
              title: 'Matrix',
              poster: 'http://placehold.it/300x150/f80'
            },
            {
              title: 'Full Metal Jacket',
              poster: 'http://placehold.it/300x150/8f0'
            },
            {
              title: 'Oldboy',
              poster: 'http://placehold.it/300x150/f86'
            },
            {
              title: 'Star Wars',
              poster: 'http://placehold.it/300x150/68f'
            }
        ]
      });
    }, 2000)
  }

  _renderMovies = ()=>{
    const movies = this.state.movies.map((movie, index)=>{
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    // console.log('did render');
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies():'Loading...'}
      </div>
    );
  }
}

export default App;
