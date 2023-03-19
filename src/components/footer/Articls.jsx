import React from "react";
import '../../style/articls.css'

function Articls(props){
    return(
    <>
        <div className="container-articls">
            <div className="container-img">
                <img src={props.img} alt="images" />

            </div>
            <div className="container-text">
                <div>
                    <h2>{props.nmb}</h2>
                    <h4><a href="#">{props.titre}</a></h4>
                    <p>{props.sousTitre}</p>
                    
                </div>

            </div>
        </div>
    </>
    );
}

export default Articls;