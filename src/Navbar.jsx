import Tab from '@mui/material/Tab';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
const Navbar = ()=>{
    return(
        <>
        <div className=' btn-group bg-body-tertiary w-100  rounded-0 '>
        <NavLink to="/" className=" fw-bolder text-dark  fw-bolder bg-info   "><Tab className=' ms-auto ' value="Home" label="Home" /> </NavLink> 
        <div className=' ms-auto bg-body-tertiary  bg-gradient '>
        <NavLink to="/About" className=' ms-auto  '><Tab value="About" label="About" /></NavLink> 
        <NavLink to="/Contact"><Tab value="Contact" label="Contact" /></NavLink>
        <NavLink to="/Service"><Tab value="Service" label="Service" /></NavLink>
        </div>
        </div>

        </>
    )
}

export default Navbar;