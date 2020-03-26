import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            city: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({
            city: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log('mhm')
        axios.post('/checkweather', {city: this.state.city})
            .then(res => {
                this.props.updateResponse(res)
            })
    }
    render() {
        return (
            <form className="city-search-form" onSubmit={this.handleSubmit}>
                <label htmlFor="Prompt">
                    Type your city:
                </label>
                <input className="city-search-form-input" type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
                <button type="submit" className="city-search-form-btn">
                </button>
            </form>
        )
    }
}
