import React from 'react'
import { Form } from 'antd';
import { Switch, Route } from 'react-router-dom'
import HorizontalLoginForm from './LoginForm'

// The login compnent is testing for SSO

const Login = () => (
    <Switch>
       <Route exact path='/login' component={NeedLogin}/>
       <Route exact path='/login/:url' component={LoginForm}/>
    </Switch>
)

const NeedLogin = () => <h1> Requries url parameter !</h1>
const LoginForm  =  Form.create()(HorizontalLoginForm);

export default Login
