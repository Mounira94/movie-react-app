import React, { Component } from 'react';
import Movies from './Components/Movies';
import Search from './Components/Search';
import Add from './Components/Add'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
library.add(faStroopwafel);
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        movie:[ {name:'Les quatre cents coups 1959',rating:6} ,   
         {name:'La haine 1995',rating:5},
         {name:'Le parrain 1972',rating:2},
         {name:'C`est arrivé près de chez vous 1992',rating:2},
         {name:'Apprendre à aimer 2018',rating:5},
        ],
        search:'' ,
        modal:false,
        name:'',
        rating:0
           }
}
searchMovie=(event)=>
{
this.setState({search:event.target.value})
}
toggleModal = () => {
  this.setState({ modal: !this.state.modal });
};
hundleChange = e => {
  this.setState({
    [e.target.id]: e.target.value
  });
};
addMovie = () => {
  let { name, rating } = this.state;
  this.setState({
    movie:[...this.state.movie, {name, rating }]
  });
  this.toggleModal();
};
  render() {
    return (
      <div className="App">
        <Search searchMovie={this.searchMovie} />
        <Movies moviesList={this.state.movie.filter(x=>x.name.toLowerCase().indexOf(this.state.search.toLowerCase())!=-1)}
        toggleModal={this.toggleModal} />
        <Add show={this.state.modal}
        hundleChange={this.hundleChange}
        addMovie={this.addMovie} />
      </div>
    );
  }
}

export default App;
