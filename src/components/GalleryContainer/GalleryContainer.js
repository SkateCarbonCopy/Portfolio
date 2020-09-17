import React from 'react';
import GalleryObject from '../GalleryObject/GalleryObject';

class GalleryContainer extends React.Component {
    render() {
        return (
            <div className="elegant-color pt-5">
                <div className="container mt-5">
                    <section id="portfolio">
                        <h3 className="font-weight-bold text-center pb-2 white-text">Portfolio</h3>
                        <hr className="w-header my-4" />
                        <p className="lead text-center text-muted pt-2 mb-5 white-text">Below are a few personal projects I've worked on, from character design for an animated series to skateboard graphics.</p>
                    {/*
                    <div className="row">
                        <div className="col-md-12 dark-grey-text d-flex justify-content-center mb-5">
                            <button type="button" className="btn btn-flat btn-lg m-0 px-3 py-1 filter" data-rel="all">All</button>
                            <p className="font-weight-bold mb-0 px-1 py-1">/</p>
                            <button type="button" className="btn btn-flat btn-lg m-0 px-3 py-1 filter" data-rel="1">Design</button>
                            <p className="font-weight-bold mb-0 px-1 py-1">/</p>
                            <button type="button" className="btn btn-flat btn-lg m-0 px-3 py-1 filter" data-rel="2">Mockup</button>
                        </div>
                    </div>
                    */}
                    <div className="gallery pb-5" id="gallery">
                        {this.props.galleryObjects.map((galleryObject, i) => {
                            return <GalleryObject GalleryObject={galleryObject} key={i} />
                        })}
                    </div>
                    </section>
                </div>
            </div>
        )
    }
};

export default GalleryContainer;