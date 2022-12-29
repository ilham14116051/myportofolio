import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare,faLinkedin,faGitSquare,faInstagramSquare } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div>
            <div className="mt-5 pt-5 pb-5 footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xs-12 about-company">
                            <h2>Thank you for visiting</h2>
                            <p className="pr-5 text-white-50">Best Regards <br/><br/>Ilham S.Kom</p>
                            <p className = "logofooter">
                                <a href="https://www.facebook.com/ilham2912/"><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></a>
                                <a href="https://www.linkedin.com/in/ilham2912/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                                <a href="https://github.com/ilhm2912"><FontAwesomeIcon icon={faGitSquare} size="2x"/></a>
                                <a href="https://www.instagram.com/ilhm1_/"><FontAwesomeIcon icon={faInstagramSquare} size="2x"/></a>
                            </p>
                        </div>
                        <div className="col-lg-3 col-xs-12 links">
                            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                            <ul className="m-0 p-0">
                                <li>- <a href="#">Home</a></li>
                                <li>- <a href="#">AboutMe</a></li>
                                <li>- <a href="#">AllProject</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-xs-12 location">
                            <h4 className="mt-lg-0 mt-sm-4">My Address</h4>
                            <p>Jl. Siliwangi No. 69, Mulyo Asri, Tulang Bawang Tengah, Tulang Bawang Barat, Lampung</p>
                            <p className="mb-0"><a href="#"><FontAwesomeIcon icon={faPhoneSquareAlt} size="xl"/></a> +6282271056498</p>
                            <p><FontAwesomeIcon icon={faMailBulk} size="xl"/> ilhm2912@gmail.com</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col copyright">
                            <p><small className="text-white-50">© 2022. All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer