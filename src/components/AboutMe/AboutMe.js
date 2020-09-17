import React from 'react';

class AboutMe extends React.Component {
    render() {
        return (
            <section className="py-5" id="aboutme">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img className="img-fluid mx-auto" src={process.env.PUBLIC_URL + '/_assets/img/aboutme/aboutme.png'} alt="Self-portrait with woods and graffiti"/>
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h1 className="wow fade-in-down" data-wow-delay="0.3s">About Me</h1>
                            <hr className="w-header my-4" />
                            <h5 className="wow fade-in-down" data-wow-delay="0.3s">I have been working as a Web Delivery Specialist at Hyland Software for nearly 5 years of my 7 years with the company. I am always seeking opportunities to expand my technical aptitude, stay current with industry trends, and grow as a professional.  </h5>
                        </div>
                    </div>
                    <div className="row mb-3" id="skills">
                        <div className="col-md-4 mx-auto">
                            <i className="fas fa-code text-black-50 wow fade-in-up" data-wow-delay="0.3s"></i>
                        </div>
                        <div className="col-md-4 mx-auto">
                            <i className="fas fa-paint-brush text-black-50 wow fade-in-up animated" data-wow-delay="0.3s"></i>
                        </div>
                        <div className="col-md-4 mx-auto">
                            <i className="fas fa-snowboarding text-black-50 wow fade-in-up animated" data-wow-delay="0.3s"></i>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMe;