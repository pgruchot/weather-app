import React from 'react'
import vid from '../vids/Pexels-Videos-1570919.mp4'

export default function Temperature( props ) {
    return (
        <div className="data-wrapper">
            <h2 className="data-city">{props.city}</h2>
            <div className="data-temp-box">
                <video className="video" src={vid} autoPlay loop muted></video>
                <h1 className="data-temp">{props.data.main.temp}</h1>
            </div>
            
        </div>
    )
}
