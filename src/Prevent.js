import React from 'react'
import './Prevent.css'
import wash from './wash.png'
import mask from './mask.png'
import close from './close.png'
import home from './home.png'
import news from './news.png'
import cold from './cold.png'
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
                      <img src={mask} height="10px" width="70px" alt="wear_mask" className="img-fluid"/>
                      </div>
                      <div className="col-lg-8">
                            <p>Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze</p>
                      </div>
                     </div>
                     <div className="row text-center">
                      <div className="col-lg-4">
                      <img src={close} alt="wash_hand" height="10px" width="130px" className="img-fluid"/>
                      </div>
                      <div className="col-lg-8">
                            <p>Avoid close contact (1 meter or 3 feet) with people who are unwell</p>
                      </div>
                     </div>
                 </div>
             </div>

             <div className="row mt-md-4">
                 <div className=" col-12 d-lg-flex justify-space-lg-between align-content-lg-center">
                     <div className="row text-center">
                      <div className="col-lg-4">
                      <img src={home} alt="wash_hand" height="10px" width="103px" className="img-fluid"/>
                      </div>
                      <div className="col-lg-8 ">
                            <p>Stay home and self isolated from other in the household if you feel unwell</p>
                      </div>
                     </div>
                     <div className="row text-center">
                      <div className="col-lg-4">
                      <img src={news} height="10px" width="103px" alt="wear_mask" className="img-fluid"/>
                      </div>
                      <div className="col-lg-8">
                            <p>Stay informed by watching news and follw the recommended pratices</p>
                      </div>
                     </div>
                     <div className="row text-center">
                      <div className="col-lg-4">
                      <img src={cold} alt="wash_hand" height="10px" width="70px" className="img-fluid"/>
                      </div>
                      <div className="col-lg-8">
                            <p>If you have fever,cough and difficult in breathing , seek medical care early</p>
                      </div>
                     </div>
                 </div>
             </div>

            
         </div>  
        </>
    )
}
