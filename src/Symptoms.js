import React from 'react'
import cough from './cough.png'
import nose from './nose.png'
import fever from './fever.jpg'
import './Symptoms.css'
import cold from './cold.jpg'
import tired from './tired.jpg'
import breath from './breath.png'
export const Symptoms = () => {
    return (
        <>
           <div className="mt-5" id="Symptoms">
               <p className="text-center main">Coronavirus Symptoms</p>
          
            <div className="row mt-4">

               <div className="col-12 d-lg-flex justify-content-lg-around">
                   <div className="text-center">
                       <img className="img-fluid img1" src={cough} alt="cough" />
                       <p>Cough</p>
                   </div>

                   <div className="text-center">
                       <img className="img-fluid img1" src={nose} alt="nose" />
                       <p>Runny Nose</p>
                   </div>

                   <div className="text-center">
                       <img className="img-fluid img1" src={fever} alt="nose" />
                       <p>Fever</p>
                   </div>

               </div>
               
               <div className="col-12 d-lg-flex justify-content-lg-around">
                   <div className="text-center">
                       <img className="img-fluid img1" src={cold} alt="cough" />
                       <p>Cold</p>
                   </div>

                   <div className="text-center">
                       <img className="img-fluid img1" src={tired} alt="nose" />
                       <p>Tiredness</p>
                   </div>

                   <div className="text-center">
                       <img className="img-fluid img1" src={breath} alt="nose" />
                       <p>Difficulty in Breathing</p>
                   </div>

               </div>
 
            </div>
            
            </div>
        </>
    )
}
