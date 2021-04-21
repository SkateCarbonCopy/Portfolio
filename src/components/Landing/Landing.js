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
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-12 white-text text-center">
                                <h1 className="display-3 mb-0 pt-md-5 pt-5 white-text d-none d-md-block">COLIN
                                    <span className="indigo-text font-weight-bold">GASTELLE</span>
                                </h1>
                                <h1 className="mb-0 pt-md-5 pt-5 white-text d-md-none">COLIN
                                    <span className="indigo-text font-weight-bold"> GASTELLE</span>
                                </h1>
                                <h3 className="text-uppercase py-4 white-text font-weight-bold">Web developer &amp; Artist</h3>
                                <div>
                                    <a className="btn btn-indigo btn-lg btn-rounded" href="#aboutme">About me</a>
                                    <a className="btn btn-light-blue btn-lg btn-rounded" href="#portfolio">Portfolio</a>
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