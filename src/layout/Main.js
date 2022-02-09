import React from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";

export default class Main extends React.Component {
  state = {
    movies: []
  }
  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=6416b368&s=panda')
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}))
  }
  searchMovies = (str, type = 'all') => {
    fetch(`http://www.omdbapi.com/?apikey=6416b368&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}))
  }
  render() {
  return(
    
    <div className="container  content ">
      <Search searchMovie={this.searchMovies}/>
      {this.state.movies.length ? (<Movies movies={this.state.movies} />) : <Loader />}
      
    </div>
  )
  }
}