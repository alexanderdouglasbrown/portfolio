import React from "react"
import "./Lightbox.css"

class Lightbox extends React.Component {
    render() {
        return (
            <div
                id="lightbox"
                className={this.props.showLightbox === null ? "" : (this.props.showLightbox ? "show-lightbox" : "hide-lightbox")}
                onClick={this.props.hideLightboxCallback}>
                <img src={this.props.image} alt="" />
            </div>
        )
    }
}

export default Lightbox