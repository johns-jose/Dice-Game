import React, { useState } from 'react'
import styled from 'styled-components'


const RollDice = ({dice,diceClick}) => {

    

    return (
        <RollDiceContainer>
            <div onClick={diceClick}>
                <img src={`/images/dice_${dice}.png`} alt="" />
            </div>

            <p>Click on Dice to roll</p>
        </RollDiceContainer>
    )
}

export default RollDice


const RollDiceContainer = styled.div`
display: flex;
flex-direction: column;  
justify-content: center;
align-items: center;
margin-top: 100px;

p {
    font-size: 24px;
    font-weight: bold;
}
    
`