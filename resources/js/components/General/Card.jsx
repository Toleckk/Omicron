import styled from "styled-components";
import React from "react";

const Container = styled.div`
    width: 560px;
    height: 150px;
    margin: 5px;
    margin-top: 10px;
    
    background: #fafafa;
    border: 1px solid blue;
    
    cursor: pointer;
    
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.1);
    } 
`;

const Head = styled.div`
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: x-large;
`;

const Card = ({head, text}) => <Container>
    <Head>{head}</Head>
    <div style={{margin: 10 + 'px', fontSize: 15 + 'px'}}>{text}</div>
</Container>;

export default Card;
