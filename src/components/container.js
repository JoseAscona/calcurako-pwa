import React from 'react'
import Titles from './titles'
import PlayerOne from './playerOne'
import PlayerTwo from './playerTwo'
import PlayerThree from './playerThree'

function container() {
    return (
        <div className="calcurako">
            <Titles />
            <PlayerOne />
            <PlayerTwo />
            <PlayerThree />
        </div>
    )
}

export default container
