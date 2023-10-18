import styled from 'styled-components'

 export const Button = styled.button`
color: white;
background-color: black;
border-radius:5px;
padding: 10px 18px;
min-width: 220px;
border: none;
cursor: pointer;
`;

export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
&:hover{
    background-color: black;
    color: white;
    transition:0.3s background ease-in;
}
`