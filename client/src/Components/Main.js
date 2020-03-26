import React, { Component, Fragment } from 'react'
import SearchForm from './SearchForm';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            response: null,
        };
        this.updateResonse = this.updateResonse.bind(this)
    }
    updateResonse(newResponse) {
        this.setState({
            response: newResponse
        })
    }
    render() {
        return (
            <div className="wrapper"> 
                {this.state.response ? 
                null :
                <SearchForm updateResponse={this.updateResonse}/>
                }  
            </div>
        )
    }
}
