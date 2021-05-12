import React from 'react'
import './App.css';
import Menu from './Menu';
import Logo from './Logo';
import {Update} from './Update';
import {About} from './About';
import {Symptoms} from './Symptoms';
import {Prevent} from './Prevent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Contact} from './Contact';
import {Footer} from './Footer';
import {Scroll} from './Scroll'
 const Main = () => {
    return (
        <>
        <div id="Home">
        <Scroll/>
        <Menu/> 
        <Logo/>            
        <Update/>
        <About/>
        <Symptoms/>
        <Prevent/>
        <Contact/>
        <Footer/>
        </div>
        </>
    )
}
export default Main;
