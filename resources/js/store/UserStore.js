import {observable, action} from "mobx";
import axios from "axios";

class UserStore {
    @observable name;

    @action auth(nickname, password) {
        axios.post('/api/auth', {nickname, password}).then(({data}) => {
            if (data) {
                this.name = nickname;
                localStorage.setItem('token', data);
            }
        });
    }

    @action me() {
        if (localStorage.hasOwnProperty('token')) {
            axios.post('/api/me', {token: localStorage.getItem('token')})
                .then(({data}) => {
                    if(data)
                        this.name = data;
                });
        }
    }

    @action logout() {
        axios.post('/api/logout', {token: localStorage.getItem('token')});
        this.name = '';
        localStorage.removeItem('token');
    }
}

export default new UserStore();
