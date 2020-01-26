import {Button, Form, Icon, Input} from 'antd';
import * as React from "react";
import {useEffect} from "react";
import UserStore from "../../../store/UserStore";

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const AuthorizationForm = ({form}) => {
    useEffect(() => {form.validateFields();}, []);

    const handleSubmit = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err)
                UserStore.auth(values.username, values.password);
        });
    };

    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = form;

    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
        <Form layout="inline" onSubmit={handleSubmit}>
            <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                {getFieldDecorator('username', {
                    rules: [{required: true, message: 'Please input your username!'}],
                })(
                    <Input
                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="Username"
                    />,
                )}
            </Form.Item>
            <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                {getFieldDecorator('password', {
                    rules: [{required: true, message: 'Please input your Password!'}],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Form.create({name: 'horizontal_login'})(AuthorizationForm);
