// import React from "react";

const Contact = ()=>{
    return(
        <>
        <div className=" my-2 ">
           <h1 className=" text-center "> Our ContactUs</h1>
        </div>

        <div className=" container-fluid ">
            <div className=" row ">
                 <div className=" col-10 col-md-6 mx-auto mb-5">
                    <form className=" border border-1 border-black p-3 ">
                    <div className="mb-3">
                         <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                         <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full name" required/>
                       </div>
                       <div className="mb-3">
                         <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                         <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Contact Number" required/>
                       </div>
                       <div className="mb-3">
                         <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                         <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                       </div>
                       <div className="mb-3">
                         <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                       </div>
                       <div className="col-12">
                       <button className="btn btn-outline-primary" type="submit">Submit</button>
                       </div>
                    </form>
                 </div>
            </div>
        </div>
        </>
    )
}

export default Contact;