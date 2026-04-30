import React from 'react';

function Footer() {
    return ( 
        <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
            <div className="container border-top mt-5">
                <div className="row mt-5">
                    
                    <div className="col">
                        <img 
                            src="assets/images/logo.svg" 
                            alt="logo" 
                            style={{ width: "50%" }} 
                        />
                        <p>
                            &copy; 2010 - 2024, Zerodha Broking Ltd.
                            <br />
                            All rights reserved.
                        </p>

                        <div>
                            <a href="/" style={{ marginRight: "20px", color: "#000", fontSize: "20px" }} className="text-muted">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="/" style={{ marginRight: "20px", color: "#000", fontSize: "20px" }} className="text-muted">
                                <i className="fa-brands fa-square-facebook"></i>
                            </a>
                            <a href="/" style={{ marginRight: "20px", color: "#000", fontSize: "20px" }} className="text-muted">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="/" style={{ marginRight: "20px", color: "#000", fontSize: "20px" }} className="text-muted">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>

                        <div>
                            <br />
                            <a href="/" style={{ marginRight: "20px", color: "#000", fontSize: "20px" }} className="text-muted">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a href="/" style={{ marginRight: "30px", color: "#000", fontSize: "20px" }} className="text-muted">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                            <a href="/" style={{ marginRight: "20px", color: "#000", fontSize: "20px" }} className="text-muted">
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col">
                        <p>Company</p>
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>About</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Products</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Pricing</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Referral programme</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Careers</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Zerodha.tech</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Press & media</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Zerodha Cares (CSR)</a><br />
                    </div>

                    <div className="col">
                        <p>Support</p>
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Contact us</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Support portal</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Z-Connect blog</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>List of charges</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Downloads & resources</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Videos</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>How to file a complaint?</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Status of your complaints</a><br />
                    </div>

                    <div className="col">
                        <p>Account</p>
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Open an account</a><br />
                        <a href="/" className="text-muted" style={{ textDecoration: "none", color: "#000" }}>Fund transfer</a><br />
                    </div>
                </div>

                <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE & MCX...</p>
                    <p>Procedure to file a complaint on SEBI SCORES...</p>
                    <p>Smart Online Dispute Resolution</p>
                </div>

                <div className="text-center mb-3">
                    <a href="/" className="text-muted" style={{ marginRight: "20px", textDecoration: "none" }}>NSE</a>
                    <a href="/" className="text-muted" style={{ marginRight: "20px", textDecoration: "none" }}>BSE</a>
                    <a href="/" className="text-muted" style={{ marginRight: "20px", textDecoration: "none" }}>MCX</a>
                    <a href="/" className="text-muted" style={{ marginRight: "20px", textDecoration: "none" }}>Terms & conditions</a>
                    <a href="/" className="text-muted" style={{ marginRight: "20px", textDecoration: "none" }}>Policies & procedures</a>
                    <a href="/" className="text-muted" style={{ marginRight: "20px", textDecoration: "none" }}>Privacy policy</a>
                    <a href="/" className="text-muted" style={{ marginRight: "20px", textDecoration: "none" }}>Disclosure</a>
                    <a href="/" className="text-muted" style={{ marginRight: "20px", textDecoration: "none" }}>Investor's attention</a>
                    <a href="/" className="text-muted" style={{ marginRight: "20px", textDecoration: "none" }}>Investor charter</a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;