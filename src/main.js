
import './App.css';
import { Link } from "react-router-dom";

export function Main() {
  return (
    <div className="main">
      
     <div className="header">
     <Link to="/">Logout</Link>
    <a href="http://www.google.com">Reservation </a>
    <a href="http://www.google.com">Private Parties</a> 
    <img src="https://drive.google.com/uc?id=1RXAribVNlQuwLXiURaEh4L0fE2ak15kz" alt="logo"/>
    <a href="http://www.google.com">Events </a>
    <a href="http://www.google.com">Contact Us</a>
    <a href="http://www.google.com">About Us</a>
     </div>
     <div>
    <img src="https://drive.google.com/uc?id=1VHeCR_rhZgL9qN1vWRjRnI1q3bt6q-Ns" alt="image1" />
    <img src="https://drive.google.com/uc?id=198zD3gJtF1_hyQFuo7tNVcREG4C8uoAe" alt="image2" />
    <img src="https://drive.google.com/uc?id=1xXrVzkICyFvLaLcGHLprAVi2dXMCBhsZ" alt="image3" />
    
     </div>
     <div className="footerdiv">

        <img src="https://drive.google.com/uc?id=1GVF_By_ltT3XgYhMB5xohO5RSZ-fhHEf" alt="graphic"/>

        </div>
    </div>
  );
}


