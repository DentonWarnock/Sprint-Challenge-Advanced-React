import React from 'react';
import PlayerCard from './PlayerCard';

export default function PlayersList(props) {

    return (
        <div className="players-container">
            <h2>Players Ranked by Search Interest</h2>
            <div className="players-list">            
                {props.playersList.map(player => {
                return <div className="player-card" key={player.id}><PlayerCard player={player} /></div>
                })}
            </div>
        </div>
    )
}