
import './App.css';
import { Link } from "react-router-dom";


export function Start() {
  return (
    <div className="Start">
      
      <div className="header">
        <div className="Linka">
        <Link to="/login">Login</Link>
        <a href="http://www.google.com">Reservation </a>
        <a href="http://www.google.com">Private Parties</a> 
        </div>
  
    <img src="https://drive.google.com/uc?id=1RXAribVNlQuwLXiURaEh4L0fE2ak15kz" alt="logo"/>
    <div className="Linkb">
    <a href="http://www.google.com">Events </a>
    <a href="http://www.google.com">Contact Us</a>
    <a href="http://www.google.com">About Us</a>
    </div>
  
     </div>
     <div className="components">
    <img src="https://drive.google.com/uc?id=1VHeCR_rhZgL9qN1vWRjRnI1q3bt6q-Ns" alt="image1"/>
    <img src="https://drive.google.com/uc?id=198zD3gJtF1_hyQFuo7tNVcREG4C8uoAe" alt="image2"/>
    {/* <img src="https://drive.google.com/uc?id=1xXrVzkICyFvLaLcGHLprAVi2dXMCBhsZ" alt="image3" width="1000vw"/> */}
    {/* <img src="https://drive.google.com/uc?id=1tN6v7WC9Kf_KkAajuQ85iGlOEX3cWLVG" alt="image3" /> */}
     </div>
     <div className="footerdiv">

      <img src="https://drive.google.com/uc?id=1GVF_By_ltT3XgYhMB5xohO5RSZ-fhHEf" alt="graphic"/>

     </div>

    </div>
  );
}

