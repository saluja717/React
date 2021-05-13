import React from 'react'
import './App.css';
import {Coronalive} from './Coronalive'
import {All} from './All';
import { Switch , Route } from 'react-router-dom'
 const Main = () => {
    return (
        <>
        <Switch>
            <Route exact path='/Coronalive' component={Coronalive} />
            <Route exact path='/' component={All}/>
        </Switch>
        
        </>
    )
}
export default Main;
