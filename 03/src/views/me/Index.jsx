import React from 'react';
import {Route, NavLink} from 'react-router-dom'
import Mobile from './Mobile'
import Password from './Password'

const Index = () =>
    <div>
        <div>
            <NavLink to="/Me/Mobile" activeClassName="selected">修改手机号码</NavLink>&nbsp;
            <NavLink to="/Me/Password" activeClassName="selected">修改密码</NavLink>&nbsp;
        </div>
        <Route path="/Me/Mobile" component={Mobile}/>
        <Route path="/Me/Password" component={Password}/>
    </div>

export default Index;