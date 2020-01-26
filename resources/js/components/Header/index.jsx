import React from "react";
import {Avatar, Button} from "antd";
import AuthorizationForm from "./AuthorizationForm";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {observer} from "mobx-react";
import UserStore from "../../store/UserStore";

const Container = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    
    pointer: cursor;
    
    & div {
        font-size: 40px;
    }
`;

const Header = () =>
    <Container>
        <Link to={"/"}>
            <Logo>
                <Avatar shape={"circle"} src={"/images/logo1.png"} size={80}/>
                <div>OMICRON</div>
            </Logo>
        </Link>
        {(!UserStore.name)
            ? <div><AuthorizationForm/><Link to={'/registration'}>Зарегистрироваться</Link></div>
            : <Button onClick={() => UserStore.logout()}>Выйти</Button>
        }
    </Container>;

export default observer(Header);
