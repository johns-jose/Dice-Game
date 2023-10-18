import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelecter = ({number,setNumber,error,setError}) => {

    const array = [1, 2, 3, 4, 5, 6]
    const numberSelectorHandler = (item)=>{
        setNumber(item)
        setError('')
    }

   
    return (

        <NumberSelectorContainer>
          <p className='error'>{error} </p>
            <div className='boxContainer'>
                {array.map((item) => (
                    <Box className='box' isSelected={item == number}
                        onClick={() =>numberSelectorHandler(item) } key={item}>{item}
                    </Box>)
                )}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelecter

const NumberSelectorContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;

.error{
    color: red;
}

.boxContainer{
    display: flex;
    gap: 24px;
}

p{
    font-size: 24px;
    font-weight: bold;
}
    
`

const Box = styled.div`
width: 72px;
height: 72px;
border:1px solid black;     
display: grid;
place-items: center;
cursor: pointer;
background-color:${(props) => (props.isSelected ? 'black' : 'white')};
color:${(props) => (!props.isSelected ? 'black' : 'white')};

`; 