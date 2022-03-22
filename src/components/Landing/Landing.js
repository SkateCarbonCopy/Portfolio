import React from 'react';

class Landing extends React.Component {
    render() {
        const headerStyles = {
            backgroundImage: "url(" + process.env.PUBLIC_URL + '/_assets/img/cover/home.jpg)',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        };
        return(
            <header>
                <div className="view" style={headerStyles}>
                    <div className="d-flex h-100 justify-content-center align-items-center">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-12 text-center" id="introduction">
                                <h1 className="display-3 mb-0 pt-md-5 pt-5 d-none d-md-block text-glow">
                                    <span className="text-light">COLIN</span>
                                    <span className="font-weight-bold">GASTELLE</span>
                                </h1>
                                <h1 className="mb-0 pt-md-5 pt-5 d-md-none">
                                    <span className="text-light">COLIN</span>
                                    <span className="font-weight-bold"> GASTELLE</span>
                                </h1>
                                <h3 className="text-uppercase text-light py-4 font-weight-bold">Web developer &amp; Artist</h3>
                                <div>
                                    <a className="btn btn-outline-light btn-lg btn-rounded mr-3" href="#aboutme">About me</a>
                                    <a className="btn btn-outline-light btn-lg btn-rounded" href="#portfolio">Portfolio</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
};

export default Landing;