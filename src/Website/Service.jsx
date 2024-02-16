// import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Source } from "./source.jsx";
const Service = ()=>{
    return(
        <>
           <div className=" my-5 ">
           <h1 className=" text-center "> Our Services</h1>
           <div className=" container-fluid ">
            <div className=" row ">
                <div className=" col-10 mx-auto">
                  <div className=" row ">
                      {Source.map((val)=>{
                        return (
                            <>
                                <div key={val.id} className=" col-md-4 col-10 mx-auto my-2 ">
                    <div className="card" >
                        <img src={val.imgs} className="card-img-top" alt="Hello images"/>
                        <div className="card-body">
                        <h5 className="card-title">{val.title}</h5>
                        <p className="card-text">{val.discription}</p>
                        <a href="#" className="btn btn-primary">{val.btn}</a>
                        </div>
                      </div>
                    </div>
                    </>
                        )  
                        
                      })}
                  </div>
                </div>
            </div>
           </div>
           </div>
        </>
    )
}

export default Service;