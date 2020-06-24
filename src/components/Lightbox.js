import React from "react"
import "./Lightbox.css"

const Lightbox = props =>
    <div
        id="lightbox"
        className={props.visible === null ? "" : (props.visible ? "show-lightbox" : "hide-lightbox")}
        onClick={props.hideLightboxCallback}>
            {
                props.video ?
                    <video autoPlay loop muted playsInline poster={props.image} src={props.video} />
                    :
                    <img src={props.image} alt="" />
            }
    </div>

export default Lightbox
