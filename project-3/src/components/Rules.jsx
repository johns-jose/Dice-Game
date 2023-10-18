import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RuleContainer>
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then  2 point will be dedcuted</p>
    </RuleContainer>
  )
}

export default Rules

const RuleContainer = styled.div`
max-width: 800px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #fbf1f1;
margin: 0 auto;
margin-top: 22px;
padding: 20px;

    
`