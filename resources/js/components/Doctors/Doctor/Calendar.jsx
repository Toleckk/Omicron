import styled from "styled-components";
import React from "react";

const Container = styled.div`
    display: flex;
    width: 300px;
    flex-wrap: wrap;
    margin-top: 10px;
`;

const Block = styled.div`
    width: 80px;
    height: 80px;
    margin: 3px;
    border: 2px solid #ffdd91;
    border-radius: 10px;
`;

const Calendar = () => <Container>
    <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/>
</Container>;

export default Calendar;
