
import React, {Component} from 'react'

export class MovieDetail extends Component {


  constructor(props) {
    super(props)

    this.state = {
      movieDetail : []
    }
  }

  populateMovieDetail() {

    const API_KEY = "77a8ace8"
    fetch('http://www.omdbapi.com/?s=batman&apikey='+API_KEY)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        movieDetail : json.Search,

      })
    })
  }


  componentDidMount() {
    this.populateMovie()
  }

  movieDetailButton = ((movie) => {
    this.props.showMovieDetail(movie)
  })

  render() {

    let movieItems = this.state.movies.map((movie) => {
      return (
        <div key={movie.imdbID} className="movie">
          <img className="poster" src={movie.Poster} />
          <a onClick={() => this.movieDetailButton(movie)} href="#">{movie.Title}</a>
        </div>
      )
    })

    return (
      <div className="movieList">
        {movieItems}
      </div>
    )
  }
}
