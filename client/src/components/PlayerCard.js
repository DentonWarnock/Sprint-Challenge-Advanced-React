import React from 'react';

export default function PlayerCard(props) {

    return (
        <div>
            <h3>{props.player.name}</h3>
            <h5>Country: {props.player.country}</h5>
            <h5>Searches: {props.player.searches}</h5>
        </div>
    )
}