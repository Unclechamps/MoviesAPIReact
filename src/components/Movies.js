
import React, {Component} from 'react'

export class Movie extends Component {


  constructor(props) {
    super(props)

    this.state = {
      movies : []
    }
  }

  populateMovie() {

    const API_KEY = "77a8ace8"
    fetch('http://www.omdbapi.com/?s=batman&apikey='+API_KEY)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        movies : json.Search,
        showDetail : ''

      })
    })
  }


  componentDidMount() {
    this.populateMovie()
  }

  render() {

    let movieItems = this.state.movies.map((movie) => {
      return (
        <div key={movie.imdbID} className="movie">
          <img className="poster" src={movie.Poster} />
          <a onClick={() => this.props.showDetail(movie)}>{movie.Title}</a>
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
