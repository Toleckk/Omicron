import React from "react";
import styled from "styled-components";
import Button from "./button";
import {Link, NavLink} from "react-router-dom";

const Container = styled.div`
    width: 100%;
    background: radial-gradient(at center left, #3580a7, #00285a);
    display: flex;
    padding-left: 30px;
`;

const Menu = () =>
    <Container>
        <NavLink to={"/surgery/"}>
            <Button>Хирургия</Button>
        </NavLink>
        <Link to={"/diagnostic/"}>
            <Button>Диагностический центр</Button>
        </Link>
        <Link to={"/dentistry/"}>
            <Button>Стоматология</Button>
        </Link>
    </Container>;

export default Menu;
