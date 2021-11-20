import React,{useState} from 'react'
import Data from './Data.jsx';
import {db} from './Firebase'
export const Contact = () => {
    const [name,update_name]=useState(null);
    const [email,update_email]=useState(null);
    const [address,update_address]=useState(null);
    const [address1,update_address1]=useState(null);    
    const [mobile,update_mobile]=useState(null);
    const [city,update_city]=useState(null);
    const [state,update_state]=useState(null);
    const [code,update_code]=useState(null);
    const checkbox={
      cold:false,
      cough:false,
      fever:false,
      tiredness:false
    };   
      const Submit = (e)=>
      {
           e.preventDefault();
           var checkbox_final ="";
           for(let b in checkbox){
             if(checkbox[b]===true){checkbox_final+=b+","};
           }
           db.collection('covid').add({
             name:name,
             email:email,
             mobileNo:mobile,
             Address:address,
             Address1:address1,
             City:city,
             State:state,
             ZipCode:code,
             Symptoms:checkbox_final
           });
           console.log("added")
      }
      const check = (e)=>
      {
           for(let a in checkbox){
             if(a===e.target.name){
                console.log(a);
                if(e.target.checked){ checkbox[a]=true;}
                else{checkbox[a]=false}
              }
           }
      }
    return (
        <>
         <div className="container" id="Contact_me">
         <p style={{color:'orange',fontSize:'25px'}} className="text-center mt-5 mb-5">Contact Us</p>
          <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" onChange={(e)=> update_email(e.target.value)} className="form-control" required id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e)=> update_name(e.target.value)} required  id="inputPassword4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" onChange={(e)=> update_address(e.target.value)} required id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputAddress1" className="form-label">Mobile No.</label>
    <input type="text" className="form-control" onChange={(e)=> update_mobile(e.target.value)} required id="inputAddress1" placeholder="123456789" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" onChange={(e)=> update_address1(e.target.value)} required id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" onChange={(e)=> update_city(e.target.value)} required id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" onChange={(e)=> update_state(e.target.value)} required className="form-select">
       {Data.map((val)=>
       {
         return(
         <option id={val.code}>{val.name}</option>);
       })}
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" onChange={(e)=> update_code(e.target.value)} required id="inputZip" />
  </div>
  <div className="col-12 d-flex justify-content-center ml-2 p-4">
        <div className="form-check form-check-inline">
  <input className="form-check-input" name="cold" onClick={check}  type="checkbox" id="inlineCheckbox1" value="option1" />
  <label className="form-check-label" htmlFor="inlineCheckbox1">Cold</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" name="fever" onClick={check}   type="checkbox" id="inlineCheckbox2" value="option2" />
  <label className="form-check-label" htmlFor="inlineCheckbox2">Fever</label>
</div>
 
 <div className="form-check form-check-inline">
  <input className="form-check-input" name="cough" onClick={check}   type="checkbox" id="inlineCheckbox3" value="option3" />
  <label className="form-check-label" htmlFor="inlineCheckbox3">Cough</label>
</div>

<div className="form-check form-check-inline">
  <input className="form-check-input" name="tiredness" onClick={check}   type="checkbox" id="inlineCheckbox4" value="option3" />
  <label className="form-check-label" htmlFor="inlineCheckbox4">Tiredness</label>
</div>
    </div>
  <div className="col-12 text-center">
    <button type="submit" onClick={Submit} className="btn btn-primary">Submit</button>
  </div>
</form>   
</div>
        </>
    )
}
