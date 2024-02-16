// import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import front from "./front.png";
import "../App.css";
import { NavLink } from "react-router-dom";
const Home = ()=>{
    return(
        <>
            <section id="header" className=" d-flex align-items-center pt-5">
            <div className=" container-fluid mx-auto ">
                <div className=" row">
                    <div className=" col-10 mx-auto px-5 ">
                        <div className=" row ">
                        <div className=" col-md-5 order-2 order-lg-1 pt-5 d-flex justify-content-center flex-column mx-auto setd">
                          <h1>Grow your Business with <strong className=" text-info ">Star Developer</strong></h1>
                          <h2 className=" my-3">
                            We are the team of talented Developer making Websites.
                          </h2>
                          <div className="mt-3" >
                            <NavLink to="/Service" className=" btn btn-outline-info rounded-5 " >Get Started</NavLink>
                          </div>
                        </div>
                        <div className=" col-md-5 order-1 order-lg-2 header-img setd pt-5">
                               <img width="400px" src={front} alt="home img" className=" img-fluid animated"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Home;