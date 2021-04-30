import React from 'react'

const Planet = props => {
    const { name, model, manufacturer, crew, passengers } = props.planet
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                <li><b>Model:</b> {model}</li>
                <li><b>Manufacturer:</b> {manufacturer}</li>
                <li><b>Crew:</b> {crew}</li>
                <li><b>Passengers:</b> {passengers}</li>
            </ul>
        </div>
    )
}

export default Planet

