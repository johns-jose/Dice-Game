import React, { useState } from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelecter from './NumberSelecter'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const Game = () => {

    const [number, setNumber] = useState()
    const [dice, setDice] = useState(1)
    const [score, setScore] = useState(0)
    const [error, setError] = useState('')
    const [showRules,setShowRules]= useState(false)
  
    const genetateRandomNumber =()=>{
        return  Math.floor((Math.random() * 6)+1)
            
    }

    const diceClick = () => {
        if (!number) {
            setError('You have not selected any number')
            return;
        }
        setError("")
       
        const randomNumber =  genetateRandomNumber()
       
         setDice((pre)=>randomNumber)

        if (number == randomNumber ) {
            setScore((prev) => prev + 2)

        } else {
             setScore((prev) => prev-1)
        }
        setNumber()

    }

    const resetScore = ()=>{
        setScore((prev)=>0)
    }

    const displayRules = ()=>{

        setShowRules((prev)=>!prev)

    }



    return (
        <MainContainer>
            <section className='topSection'>
                <TotalScore score={score} />
                <NumberSelecter number={number} setNumber={setNumber} error={error} setError={setError} />
            </section>

            <RollDice dice={dice} diceClick={diceClick} />

            <div className='btn'>
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button onClick={displayRules} >Show Rules</Button>
            </div>
            {showRules && <Rules />}



        </MainContainer>

    )
}

export default Game
const MainContainer = styled.div`
margin-top: 22px;

.topSection{
    max-width: 1280px;
    /* min-height: 150px; */
    display: flex;
    justify-content: space-between;
    align-items: center;    
    margin: 0 auto; 
}

.btn{
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}
`;
