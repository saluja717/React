import React from 'react'
import img from './eksath.png';
import corona from './corona.png';
import './Logo.css';

 const Logo = () => {
    return (
        <>
         <div className="row mt-5">
            
            <div className="col-md-6 text-center order-md-1 order-2 d-lg-flex justify-content-lg-center align-content-lg-center">
            <img src={img} className="img" alt="logo_image" />
            </div>
           
            <div className="col-md-6 d-lg-flex justify-content-lg-center order-md-2 order-1 align-items-lg-center">
                <p className="text text-center">Let's Stay Safe & Fight Together Against Cor<span><img src={corona} className="img-fluid corona" alt="corona_image"/></span>na Virus </p>
            </div>
            
         </div>   
        </>
    )
}
export default Logo;
