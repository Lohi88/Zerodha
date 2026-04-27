import React from 'react';

function LeftSection({
    imagURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 

        <div className="container mt-5">
            <div className="row">
                <div className="col-6 ">
                    <img src={imagURL} alt="product"/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div className='mt-3'>
                    <a href={tryDemo || '/'}  style={{textDecoration:"none"}}>Try Demo <i className="fa-solid fa-arrow-right-long"></i></a>
                    <a href={learnMore || '/'} style={{marginLeft:"120px",textDecoration:"none"}}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay || '/'}><img src='assets/images/googlePlayBadge.svg' alt="google play"/></a>
                    <a href={appStore || '/'} style={{marginLeft:"50px"}}><img src='assets/images/appstoreBadge.svg' alt="app store" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;