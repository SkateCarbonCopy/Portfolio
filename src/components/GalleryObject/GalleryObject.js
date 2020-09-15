import React from 'react';

class GalleryObject extends React.Component {
    render() {
        return (
            <article>
                <div className="mb-3 pics all 2 animation">
                    <a data-toggle="modal" data-target={'#' + this.props.GalleryObject.file + 'Modal'}>
                        <img className="img-fluid z-depth-1 rounded gallery-img" src={this.props.GalleryObject.imageSrc} alt="Sample" />
                    </a>
                </div>
                <div className="modal fade" id={this.props.GalleryObject.file + 'Modal'} tabIndex="-1" role="dialog" aria-labelledby={this.props.GalleryObject.file + 'ModalLabel'} aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div className="row">
                                        <div className="col-md-6 py-5 pl-5">
                                            <h5 className="font-weight-normal mb-3">{this.props.GalleryObject.title}</h5>
                                            <p className="text-muted">{this.props.GalleryObject.description}</p>
                                            <ul className="list-unstyled font-small mt-5">
                                                <li>
                                                    <p className="text-uppercase mb-2"><strong>Media</strong></p>
                                                    <p className="text-muted mb-4">{this.props.GalleryObject.media}</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="view rounded-right">
                                                <img className="img-fluid" src={this.props.GalleryObject.imageSrc} alt="Sample" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </article>
        )
    }
}

export default GalleryObject;