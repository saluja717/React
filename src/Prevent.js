import React from 'react'
import './Prevent.css'
import wash from './wash.jpg'
import wear from './wear.jpg'
export const Prevent = () => {
    return (
        <>
         <div className=" container mt-md-5">
             <p className="main text-center">6 Steps Prevention Against Coronavirus</p>
             <div className="row mt-md-5">
                 <div className=" col-12 d-lg-flex justify-space-lg-between align-content-lg-center">
                     <div className="row text-lg-left text-center">
                      <div className="col-lg-4">
                      <img src={wash} alt="wash_hand" height="10px" width="103px" className="img-fluid"/>
                      </div>
                      <div className="col-lg-8 ">
                            <p>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub </p>
                      </div>
                     </div>
                     <div className="row text-center">
                      <div className="col-lg-4">
                      <img src={wear} height="10px" width="80px" alt="wear_mask" className="img-fluid"/>
                      </div>
                      <div className="col-lg-8">
                            <p>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub </p>
                      </div>
                     </div>
                     <div className="row text-center">
                      <div className="col-lg-4">
                      <img src={wash} alt="wash_hand" height="10px" width="103px" className="img-fluid"/>
                      </div>
                      <div className="col-lg-8">
                            <p>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub </p>
                      </div>
                     </div>
                 </div>
             </div>

             <div className="row mt-md-4">
                 <div className=" col-12 d-lg-flex justify-space-lg-between align-content-lg-center">
                     <div className="row text-center">
                      <div className="col-lg-4">
                      <img src={wash} alt="wash_hand" height="10px" width="103px" className="img-fluid"/>
                      </div>
                      <div className="col-lg-8 ">
                            <p>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub </p>
                      </div>
                     </div>
                     <div className="row text-center">
                      <div className="col-lg-4">
                      <img src={wear} height="10px" width="80px" alt="wear_mask" className="img-fluid"/>
                      </div>
                      <div className="col-lg-8">
                            <p>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub </p>
                      </div>
                     </div>
                     <div className="row text-center">
                      <div className="col-lg-4">
                      <img src={wash} alt="wash_hand" height="10px" width="103px" className="img-fluid"/>
                      </div>
                      <div className="col-lg-8">
                            <p>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub </p>
                      </div>
                     </div>
                 </div>
             </div>

            
         </div>  
        </>
    )
}
