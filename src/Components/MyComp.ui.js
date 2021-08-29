import styled from 'styled-components';

export const ManeBox = styled.div`
text-align: center;
width: 19rem;
background-color: black;
color: white;
margin: 0 auto;
padding: 50px;
`;

export const Input = styled.input`
margin: 5px;
height: 2rem;
outline: none;
background-color: black;
border: 1px solid gray;
border-radius: 3px;
color: white;
width: ${props => props.names ? "8.5rem" : "18rem"};
`;

export const Button = styled.button`
height: 1.5rem;
width: 18rem;
background-color: #4abaec;
border-radius: 3px;
border: none;
margin-bottom: 10px;
`;

export const TitleForm = styled.div`
font-size: 25px;
margin: 20px 0;
`;

export const TextCheck = styled.div`
font-size: 12px;
text-align: left;
margin-left: 10px;
`;

export const BoxCheck = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
width: 18rem;
`;

export const Copyright =styled.div`
font-size: 10px;
margin-top: 2rem;
opacity: 50%;
`;