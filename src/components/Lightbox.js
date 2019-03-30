import React from "react"
import "./Lightbox.css"

const Lightbox = props =>
    <div
        id="lightbox"
        className={props.showLightbox === null ? "" : (props.showLightbox ? "show-lightbox" : "hide-lightbox")}
        onClick={props.hideLightboxCallback}>
        <img src={props.image} alt="" />
    </div>

export default Lightbox
