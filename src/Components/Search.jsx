import React, { Component } from 'react';
import Movies from './Movies';
class Search extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="search">
                <input type="text" placeholder="Type movie name to search" onChange={this.props.searchMovie} className="search-text" />
                <div className="rating">
                    <p className="rating-text">Minimuim rating</p>
                    <div className="rating-stars" >
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;