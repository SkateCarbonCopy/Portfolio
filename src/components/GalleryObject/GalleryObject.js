import React from 'react';

class GalleryObject extends React.Component {
    render() {
        return (
            <div className="mb-3 pics all 2 animation">
                {/*<a data-toggle="modal" data-target="#basicExampleModal"></a>*/}
                <img className="img-fluid z-depth-1 rounded" src={this.props.GalleryObject.imageSrc} alt="Sample" />
            </div>
        )
    }
}

export default GalleryObject;