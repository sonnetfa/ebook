import React from "react";
import './Footer.css'
class Footer extends React.Component{
    render(){
        return(
        <div className="text-align-center footer-items">
            <span className="fa fa-facebook"></span>
            <span className="fa fa-twitter"></span>
            <span className="fa fa-youtube"></span>
            <span className="fa fa-google-plus"></span>
            <span className="fa fa-pinterest"></span>
            <span className="fa fa-github"></span>
        </div>
        )
    }
}
export default Footer;