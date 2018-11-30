import React, { Component } from 'react';
class Add extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{display:this.props.show ? "block" : "none"}} className="form-add" >
            <div className="form">
                <input id="name" className="form-input" onChange={this.props.hundleChange} type="text" placeholder="Movie name" />
                <input id="rating" className="form-input" onChange={this.props.hundleChange} type="text" placeholder="Movie rating" />
                    <button className="btn" onClick={this.props.addMovie}>Save</button>
            </div>
            </div>
        )
    }
}
export default Add;