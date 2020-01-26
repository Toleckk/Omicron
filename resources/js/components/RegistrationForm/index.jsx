import {Button, Form, Input,} from 'antd';
import React, {useState} from "react";
import Container from "./Container";
import axios from "axios";
import {Redirect} from "react-router";

const RegistrationForm = ({form}) => {
    const [success, setSuccess] = useState(false);

    const validateNickname = (rule, value, callback) => {
        axios.post('/api/nickname', {nickname: value})
            .then(e => e.data ? callback("Ник существует") : callback());
    };

    const validateToNextPassword = (rule, value, callback) => {
        if (value)
            form.validateFields(['confirm'], {force: true});
        callback();
    };

    const compareToFirstPassword = (rule, value, callback) =>
        (value && value !== form.getFieldValue('password'))
            ? callback('Пароли не совпадают')
            : callback();

    const submit = e => {
        e.preventDefault();
        form.validateFieldsAndScroll((err, values) => {
            if (!err)
                axios.post('/api/register', values).then(() => setSuccess(true));
        });
    };

    return (<>
        {success && <Redirect to={"/"}/>}
        <Container>
            <Form style={{width: 600 + 'px'}} onSubmit={submit}>
                <Form.Item label={"Nickname"}>{
                    form.getFieldDecorator('nickname', {
                        rules: [
                            {required: true, message: 'Введите ник', whitespace: true},
                            {validator: validateNickname}
                        ]
                    })(<Input/>)
                }</Form.Item>
                <Form.Item label={"Password"}>{
                    form.getFieldDecorator('password', {
                        rules: [
                            {required: true, message: 'Введите пароль'},
                            {validator: validateToNextPassword},
                        ],
                    })(<Input.Password/>)
                }</Form.Item>
                <Form.Item label={"Confirm"}>{
                    form.getFieldDecorator('confirm', {
                        rules: [
                            {required: true, message: 'Подтвердите пароль'},
                            {validator: compareToFirstPassword},
                        ],
                    })(<Input.Password/>)
                }</Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </Container>
    </>);
};

const WrappedRegistrationForm = Form.create({name: 'register'})(RegistrationForm);

export default WrappedRegistrationForm;
