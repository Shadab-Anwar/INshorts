import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <>
        <div className="foot">
        <div className="foot1">
        <div className="f1">
            <img src="https://assets.inshorts.com/website_assets/images/logo_footer.png" alt="no image" className='img'/><br />
            <div className="b"><b>InShorts</b></div><div className="txt">Pte.Ltd.&copy;COPYRIGHT 2024</div>
        </div>
        <div className="f2">
            <a href="#"><img src="https://assets.inshorts.com/website_assets/images/contact_icon.png" alt="no image" className="img2" /></a>
            <div className="txt2"><a href="https://inshorts.com/tnc">Terms&Conditions </a><br />
            <a href="https://inshorts.com/tnc">Privacy Policies</a></div>
        </div>
        <div className="f3">
            <div className="fb"><a href="https://www.facebook.com/inshortsapp"><img src="https://assets.inshorts.com/website_assets/images/facebook.png" alt="no image" className='ics' /></a></div>
            <div className="twi"><a href="https://twitter.com/inshorts"><img src="https://assets.inshorts.com/website_assets/images/twitter.png" alt="no image" className='ics' /></a></div>
            <div className="link"><a href="https://www.linkedin.com/company/news-in-shorts"><img src="https://assets.inshorts.com/website_assets/images/linkedin.png" alt="no image" className='ics'/></a></div>
        </div>
        </div>
        </div>
        </>
    </div>
  )
}

export default Footer
