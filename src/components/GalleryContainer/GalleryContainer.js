import React from 'react';
import GalleryObject from '../GalleryObject/GalleryObject';

class GalleryContainer extends React.Component {
    render() {
        return (
            <div className="container my-5">
                <section>
                    <div className="modal fade" id="basicExampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div className="row">
                                        <div className="col-md-6 py-5 pl-5">
                                            <h5 className="font-weight-normal mb-3">Paper cup mockup</h5>
                                            <p className="text-muted">Key letters, explain which writing we he carpeting or fame, the itch expand medical amped through constructing time. And scarfs, gain, get showed accounts decades.</p>
                                            <ul className="list-unstyled font-small mt-5">
                                                <li>
                                                    <p className="text-uppercase mb-2"><strong>Client</strong></p>
                                                    <p className="text-muted mb-4">Envato Inc.</p>
                                                </li>
                                                <li>
                                                    <p className="text-uppercase mb-2"><strong>Date</strong></p>
                                                    <p className="text-muted mb-4">June 27, 2019</p>
                                                </li>
                                                <li>
                                                    <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                                                    <p className="text-muted mb-4">Design, HTML, CSS, Javascript</p>
                                                </li>
                                                <li>
                                                    <p className="text-uppercase mb-2"><strong>Address</strong></p>
                                                    <a href="https://mdbootstrap.com/docs/jquery/design-blocks/">MDBootstrap</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="view rounded-right">
                                                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/5.jpg" alt="Sample" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <h3 className="font-weight-bold text-center dark-grey-text pb-2">Portfolio</h3>
                <hr className="w-header my-4" />
                <p className="lead text-center text-muted pt-2 mb-5">You can find several product design by our professional team in this section.</p>
                <div className="row">
                    <div className="col-md-12 dark-grey-text d-flex justify-content-center mb-5">
                        <button type="button" className="btn btn-flat btn-lg m-0 px-3 py-1 filter" data-rel="all">All</button>
                        <p className="font-weight-bold mb-0 px-1 py-1">/</p>
                        <button type="button" className="btn btn-flat btn-lg m-0 px-3 py-1 filter" data-rel="1">Design</button>
                        <p className="font-weight-bold mb-0 px-1 py-1">/</p>
                        <button type="button" className="btn btn-flat btn-lg m-0 px-3 py-1 filter" data-rel="2">Mockup</button>
                    </div>
                </div>
                <div className="gallery mb-5" id="gallery">
                    {this.props.galleryObjects.map( galleryObject => {
                        return <GalleryObject GalleryObject={galleryObject} />
                    })}
                </div>
                </section>
            </div>
        )
    }
};

export default GalleryContainer;