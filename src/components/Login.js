import React from 'react'
import { Form } from 'antd';
import { Switch, Route } from 'react-router-dom'
import HorizontalLoginForm from './LoginForm'

// The login compnent is testing for SSO

const Login = () => (
    <Switch>
       <Route exact path='/login/:url' component={LoginForm}/>
    </Switch>
)

const LoginForm  =  Form.create()(HorizontalLoginForm);

export default Login
