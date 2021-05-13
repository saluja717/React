import React from 'react'
import Data from './Data.jsx';
export const Contact = () => {
    return (
        <>
         <div className="container" id="Contact_me">
         <p style={{color:'orange',fontSize:'25px'}} className="text-center mt-5 mb-5">Contact Us</p>
          <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Name</label>
    <input type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputAddress1" className="form-label">Mobile No.</label>
    <input type="text" className="form-control" id="inputAddress1" placeholder="123456789" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
       {Data.map((val)=>
       {
         return(
         <option id={val.code}>{val.name}</option>);
       })}
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  <div className="col-12 d-flex justify-content-center ml-2 p-4">
        <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
  <label className="form-check-label" htmlFor="inlineCheckbox1">Cold</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
  <label className="form-check-label" htmlFor="inlineCheckbox2">Fever</label>
</div>
 
 <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
  <label className="form-check-label" htmlFor="inlineCheckbox3">Cough</label>
</div>

<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option3" />
  <label className="form-check-label" htmlFor="inlineCheckbox4">Tiredness</label>
</div>
    </div>
  <div className="col-12 text-center">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>   
</div>
        </>
    )
}
