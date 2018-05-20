import React from 'react';
/*import Opener from './custom/opener.js';
import Output from './custom/output.js';*/
import BetMenuButton from './BetMenuButton.js'

const BetMenu = ({makeBet, player}) => {
    let input;
    const handleClick = () => {
        if (input.value !== '') {
            makeBet(input.value, player)
        } 
    } 
    return <div className="bet-menu">
        <div className="bet-menu_block">
            <BetMenuButton handleClick={handleClick} task='BET' />
            <BetMenuButton task='CALL' />
            <BetMenuButton task='FOLD' />
        </div>
        <input ref={(node) => input = node} type='text'></input>
        <p>{player.playerName} chips: {player.playerChips}</p>
    </div>
} 
export default BetMenu;

/*{ const values = [
    "why", "are ", "we", "still", "here"
]; }

{ <div className = "select-output-wrap">
        < Output values={values} />
        < Opener />
    </div> }*/