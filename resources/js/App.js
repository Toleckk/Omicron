import React from 'react';
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import {Route, Switch} from "react-router";
import General from "./components/General";
import {BrowserRouter} from 'react-router-dom'
import Doctors from "./components/Doctors";
import RegistrationForm from "./components/RegistrationForm";
import {observer} from "mobx-react";
import UserStore from './store/UserStore';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

@observer
class App extends React.Component {
    componentWillMount(){
        UserStore.me();
    }

    render() {
        return <BrowserRouter>
            <Header/>
            <Menu/>

            <Switch>
                <Route exact path={"/"} component={General}/>
                <Route exact path={'/registration/'} component={RegistrationForm}/>
                <Route path={"/:speciality/"} component={Doctors}/>
            </Switch>
        </BrowserRouter>;
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
