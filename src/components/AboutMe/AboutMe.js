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
                            <h1>About Me</h1>
                            <hr className="my-4" />
                            <h5>I have been working as a Web Delivery Specialist at Hyland Software for nearly 5 years of my 7 years with the company. I am always seeking opportunities to expand my technical aptitude, stay current with industry trends, and grow as a professional.  </h5>
                        </div>
                    </div>
                    <div className="row mb-3" id="skills">
                        <div className="col-md-4 mx-auto my-3">
                            <i className="fas fa-code text-black-50 fade-in-up"></i>
                        </div>
                        <div className="col-md-4 mx-auto my-3">
                            <i className="fas fa-paint-brush text-black-50 fade-in-up animated"></i>
                        </div>
                        <div className="col-md-4 mx-auto my-3">
                            <i className="fas fa-snowboarding text-black-50 fade-in-up animated"></i>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMe;