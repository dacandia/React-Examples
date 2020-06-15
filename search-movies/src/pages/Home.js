import React, { Component } from 'react';

import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export class Home extends Component {
    //state.results as an empty array
    state = { usedSearch: false, results: []}

    //state.results is updated with the results
    //It is passed as props in the form 
    _handleResults = (results) => {
        this.setState({ results, usedSearch: true })
    }

    _renderResults() {
        return this.state.results.length === 0 
            ? <p>Sorry! <span>😢</span> Results not found!</p>
            : <MoviesList movies={this.state.results} />
    }

    render () {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className='SearchForm-wrapper'>
                    <SearchForm onResults={this._handleResults}/>
                </div>
                {this.state.usedSearch
                    ? this._renderResults()
                    : <small>Use the form to search a movie</small>
                }
            </div>
        );
    }
}