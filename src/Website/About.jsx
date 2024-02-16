// import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import about from "./about.png";
import "../App.css";
import { NavLink } from "react-router-dom";
const About = (props)=>{
    return(
        <>
            <section id="header" className=" d-flex align-items-center pt-5 ">
            <div className=" container-fluid  ">
                <div className=" row">
                    <div className=" col-11 mx-auto">
                        <div className=" row ">
                        <div className=" col-md-6 order-2 order-lg-1 pt-5 d-flex justify-content-center flex-column setd">
                          <h1>{props.change1} <strong className=" text-info ">Star Developer</strong></h1>
                          <h2 className=" my-3">
                            We are the team of talented Developer making Websites.
                          </h2>
                          <div className="mt-3" >
                            <NavLink to="/Contact" className=" btn btn-outline-info rounded-5 " >{props.change2}</NavLink>
                          </div>
                        </div>
                        <div className=" col-md-6 order-1 order-lg-2 header-img pt-5 setd">
                               <img width="400px" src={about} alt="home img" className=" img-fluid animated"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default About;