import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            city: '',
            err: ''
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
        axios.post('/checkweather', {city: this.state.city})
            .then(res => {
                if(res.data.err)
                    this.setState({
                        err: res.data.err
                    })
                else
                    this.props.updateResponse(res.data, this.state.city)
            })
    }
    render() {
        return (
            <form className="city-search-form" onSubmit={this.handleSubmit}>
                <label className="city-search-form-label" htmlFor="Prompt">
                    {this.state.err ? "Wrong! Type again." : "Type your City"}
                </label>
                <input className="city-search-form-input" type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
                <button type="submit" className="city-search-form-btn">
                    Go!
                </button>
            </form>
        )
    }
}
