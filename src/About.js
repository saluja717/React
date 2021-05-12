import React from 'react'
import './About.css';
import img1 from './im.jpg'
export const About = () => {
    return (
        <>
           <div className="mt-5" id="About">
               <p className="text-center main">About COVID-19</p>

               <div className="row  pt-5 ">
                     <div className="col-md-5 ml-5 im text-center ">
                         <img className="img-fluid myimg" src={img1} alt="Image"/>
                     </div>
                     <div className="col-md-7 mt-lg-0 mt-3">
                    <h3 className="text-center">What is COVID-19 (Corona-Virus)</h3>
                    <p className="text-center pl-lg-0 ml-2">COVID-19 is the disease caused by SARS-CoV-2, the coronavirus that emerged in December 2019.
                        COVID-19 can be severe, and has caused millions of deaths around the world as well as lasting health problems in some who have survived the illness.
                        <br/> <br/>The coronavirus can be spread from person to person. It is diagnosed with a laboratory test.
                        COVID-19 vaccines have been authorized for emergency use by the U.S. Food and Drug Administration, and vaccination programs are in progress across the U.S. and in many parts of the world.
                        Prevention involves physical distancing, mask-wearing, hand hygiene and staying away from others if you feel sick.</p>
                     </div>
               </div>
           </div>  
        </>
    )
}
