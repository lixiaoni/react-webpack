import React from 'react';
import {Route, NavLink, Link} from 'react-router-dom'
import Mobile from './Mobile'
import Password from './Password'

const Index = () =>
    <div>
        <div>
            <NavLink to="/Me/Mobile" activeClassName="selected">修改手机号码</NavLink><br/>
            <NavLink to="/Me/Password" activeClassName="selected">修改密码</NavLink><br/>
            <Link to={{
                pathname: '/Me/Mobile',
                state: {mobile: 13812345678}
            }} >修改手机号码：13812345678 (state传值)</Link><br/>

            <Link to={{
                pathname: '/Me/Mobile',
                query: { mobile : 13888888888 }
            }} >修改手机号码：13888888888 (query 传值)</Link>
        </div>
        <Route path="/Me/Mobile" component={Mobile}/>
        <Route path="/Me/Password" component={Password}/>
    </div>

export default Index;