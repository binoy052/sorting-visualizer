import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="bg-light mt-5">
            <hr/>
            <div className="row justify-content-center">             
                <div className="col-12 col-sm-3 col-md-2 align-self-center">
                    <h5>Project</h5>
                    <div>
		              Binoy Hembram<br />
		              B.E. in Information Technology<br/>
                      Jadavpur University<br />
		              <i className="fa fa-envelope fa-lg"></i> <a href="mailto:hembrambinoy5@gmail.com">
                         hembrambinoy5@gmail.com</a>
                    </div>
                </div>
                <div className="col-12 col-sm-3 col-md-2 mt-3 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon" href="mailto:hembrambinoy5@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© 2022 Binoy Hembram</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;