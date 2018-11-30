import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Card = ({ rating, name }) => {
    return (
        <div className="movie"> <div className="movie-stars">{''.padEnd(rating, '*').split('').map(x => {
            return <i class="fas fa-star"></i>
        })} </div>
            <b className="movie-name">{name}</b>
        </div>
    )
}
class Movies extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main className="main">
                <div className="movies-list">
                    {this.props.moviesList.map(x => {
                        return <Card rating={x.rating} name={x.name} />
                    })}
                    <div onClick={this.props.toggleModal} className="movie">
                        <i class="fas fa-plus" ></i>
                    </div>
                </div>
            </main>
        )
    }
}
export default Movies;