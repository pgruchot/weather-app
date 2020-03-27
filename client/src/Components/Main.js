import React, { Component, Fragment } from 'react'
import SearchForm from './SearchForm'
import Temperature from './Temperature'

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            response: null,
            city: ""
        };
        this.updateResonse = this.updateResonse.bind(this)
        this.handleButton = this.handleButton.bind(this)
    }
    updateResonse(newResponse, newCity) {
        this.setState({
            response: newResponse,
            city: newCity
        })
    }
    handleButton() {
        this.setState({
            response: null,
            city: ""
        })
    }
    render() {
        return (
            <div className="wrapper"> 
                {this.state.response ?
                <Fragment>
                    <Temperature data={this.state.response} city={this.state.city}/>
                    <button className="reset-btn" onClick={this.handleButton}></button>
                </Fragment> 
                 :
                <SearchForm updateResponse={this.updateResonse}/>
                }  
            </div>
        )
    }
}
