import React from "react";
import Button from "./button/Button";
import Footer from "./footer/Footer";
import Aside from "./aside/Aside";
import webTrie from "../images/image-web-3-desktop.jpg"

function Main(){
    return(
        <>
            <div className="container-main">
                <div className="section-aside">
                    <div className="section">
                        <div className="image-main">
                            <img src={webTrie} alt="main image" />
                        </div>
                        <div className="description">
                            <div className="titre">
                                <h1>
                                    <b>The Bright <br /> Future of <br /> Web 3.0?</b>
                                </h1>
                            </div>
                            <div className="continu-text">
                                <p>
                                    We dive into the next evolution of the web that <br />
                                    claims to put the power of the platforms back <br />
                                    into the hands of the people. But is it really <br />
                                    fulfiling its promise?
                                </p>
                                <Button />
                            </div>
                        </div>
                    </div>
                    <div className="aside">
                        <div className="titre-new">

                        <h1>NEW</h1>
                        </div>
                        <div className="aside-article">
                            <Aside/>
                        </div>
                    </div>
                </div>
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Main;