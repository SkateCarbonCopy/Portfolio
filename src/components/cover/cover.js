import React from 'react';

class Cover extends React.Component {
    render() {
        const headerStyles = {
            backgroundImage: "url(" + process.env.PUBLIC_URL + '/_assets/img/cover/home.jpg)',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        };
        return(
            <header>
                <div className="view jarallax" data-jarallax='{"speed": 0.2}' style={headerStyles}>
                    <div className="mask rgba-white-light d-flex justify-content-center align-items-center">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-12 white-text text-center">
                                <h1 className="display-3 mb-0 pt-md-5 pt-5 white-text wow fadeInDown d-none d-md-block" data-wow-delay="0.3s">COLIN
                                    <span className="indigo-text font-weight-bold">GASTELLE</span>
                                </h1>
                                <h1 className="mb-0 pt-md-5 pt-5 white-text wow fadeInDown d-md-none" data-wow-delay="0.3s">COLIN
                                    <span className="indigo-text font-weight-bold"> GASTELLE</span>
                                </h1>
                                <h3 className="text-uppercase py-4 white-text font-weight-bold wow fadeInDown"
                                data-wow-delay="0.3s">Web developer &amp; Artist</h3>
                                <div className="wow fadeInDown" data-wow-delay="0.3s">
                                    <a className="btn btn-light-blue btn-lg btn-rounded" href="#portfolio">Portfolio</a>
                                    {/*<a className="btn btn-indigo btn-lg btn-rounded disabled">About me</a>*/}
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

export default Cover;