import React from "react"
import GitLink from "./GitLink"
import "./Project.css"

export default (props) => {
    return (
        <div className="row project">
            <div className="col-sm-4 col-xs-12">
                <img
                    className="img-thumbnail img-responsive project-image"
                    alt="" src={props.image}
                    onClick={() => props.showLightboxCallback(props.image)}
                    style={{ cursor: "pointer" }}
                />
            </div>
            <div className="col-sm-8 col-xs-12">
                <h3>{props.url != null ? (<a href={props.url}>{props.title}</a>) : (<span>{props.title}</span>)}
                    {props.giturl != null ? <GitLink url={props.giturl} /> : null}
                    <small><br />{props.description}</small></h3>
                {props.children}
            </div>
        </div>
    )
}
