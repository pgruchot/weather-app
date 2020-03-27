import React from 'react'

export default function Temperature( props ) {
    console.log(props.data)
    return (
        <div className="data-wrapper">
            <h2 className="data-city">{props.city}</h2>
            <h1 className="data-temp">{props.data.main.temp}</h1>
        </div>
    )
}
