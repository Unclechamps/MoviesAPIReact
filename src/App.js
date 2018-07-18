import React, { Component } from 'react';
import logo from './logo.svg';
import {Movie} from './components/Movies'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      movies : [],
      movieDetail : []
    }
  }

  showDetail = ((movie) => {

      console.log(movie)

      })


  render() {
    return (
      <div className="container">
        <h1>"I'm Batman!"</h1>
      <div>
        <Movie showDetail = {this.showDetail}/>
      </div>
      </div>


    );
  }
}

export default App;
