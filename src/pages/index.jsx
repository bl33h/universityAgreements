import React from 'react'
import Login from './login'
import { Switch, Route } from 'react-router-dom'
const Page = () => {

    return (
        <Switch>
            <Route path="/Login">
                <Login />
            </Route>
        </Switch>
    )
}

export default Page