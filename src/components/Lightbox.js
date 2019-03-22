import React from "react"
import "./Lightbox.css"

class Lightbox extends React.Component {
    constructor() {
        super();

        this.state = {
            showLightbox: false,
            image: ""
        }
    }

    render() {
        return (
            <div id="lightbox">
                <img src="https://via.placeholder.com/450" alt={this.props.alt || ""} />
            </div>
        )
    }
}

export default Lightbox