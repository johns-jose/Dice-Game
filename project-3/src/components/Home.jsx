import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'

const Home = ({ toggle }) => {
    return (

        <HomeContainer>
            <div>
                <img src="/images/logo.png" alt="logo" />
            </div>
            <div className='HomeContent'>
                <h1>DICE GAME</h1>
                <Button onClick={toggle} >Play Now</Button>
            </ div >
        </HomeContainer>


    )
}

export default Home

const HomeContainer = styled.div`
max-width: 1180px;
display: flex;
justify-content: center;
align-items: center;
/* height: 100vh; */
margin: 0 auto;

.HomeContent{
    display: flex;
    flex-direction: column;
    align-items: end;

    h1{
    font-size: 96px;
    font-weight: bold;
    white-space: nowrap; 
}
}
`
