import React from "react";
import "../../style/newArticls.css"

function NewArticles(props){
    return(
        <>
                <div className="new-articls">
                    <h3><a className="a-articls-new" href="#">{props.titre}</a></h3>
                    <p className="paragraph-new-article"> {props.sousTitre} </p>
                </div>
        </>
    )
}

export default NewArticles;