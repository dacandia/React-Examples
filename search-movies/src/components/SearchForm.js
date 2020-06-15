import React, { Component } from 'react';

const API_KEY = '78dd5c9a'

export class SearchForm extends Component{
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state
        //here a request is made to the omdb api
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                //Extract of Search and totalResults parameters
                const {Search = [], totalResults = "0" } = results
                console.log({ Search, totalResults })
                this.props.onResults(Search)
            })
    }

    render () {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input"
                            onChange={this._handleChange}
                            type="text" 
                            placeholder="Movie to search..."
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div> 
            </form>

        );
    }
}