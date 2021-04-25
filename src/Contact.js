import React, { useState } from 'react';

const Contact = () => {
    const [allValues, updateValues] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${allValues.fullname} my phone no is ${allValues.phone} my email is ${allValues.email} and message is ${allValues.msg}`)
    }

    const inputEvent = (event) =>{
        const {name, value} = event.target;

        updateValues((preValues)=>{
            return {
                ...preValues,
                [name] : value,
            }
        })
    }
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={formSubmit}>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control"  name="fullname" value={allValues.fullname} onChange={inputEvent} placeholder="Full Name"/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone No</label>
  <input type="number" class="form-control"  name="phone" value={allValues.phone} onChange={inputEvent} placeholder="Phone No"/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={allValues.email} onChange={inputEvent} placeholder="name@example.com"/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" placeholder="Message">Message</label>
  <textarea class="form-control"  rows="3" name="msg" value={allValues.msg} onChange={inputEvent}></textarea>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
        </form>
        </div>
        </div>
        </div>
        </>
    );
};

export default Contact;