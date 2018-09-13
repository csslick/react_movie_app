import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
      greeting: 'Hello!'
  }

  componentWillMount(){
    console.log('will mount');
    console.log('this.state: ', this.state.greeting);
  }

  componentDidMount(){
    this._getMovies()
  }

  _getMovies = async () =>{
    // _callApi가 완료될때까지 대기
    const movies = await this._callApi()

    // 무비 데이터 세팅
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then((res) => { return res.json() })
    .then((json) => { return json.data.movies})
    .catch((err) => {return console.log(err)})
  }

  _renderMovies = ()=>{
    // key로 파라미터 index를 사용하는 느리므로 권장하지 않음
    // console.log(this.state.movies)
    const movies = this.state.movies.map((movie) => {
      return <Movie 
        title={movie.title} 
        poster={movie.medium_cover_image} 
        synopsis={movie.synopsis}
        genres={movie.genres}
        key={movie.id} />
    })
    return movies
  }

  render() {
    // console.log('did render');
    return (
      <div className={this.state.movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies():'Loading...'}
      </div>
    );
  }
}

export default App;
