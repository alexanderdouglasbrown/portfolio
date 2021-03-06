import React from "react"
import GitLink from "./GitLink"
import ServerLink from './ServerLink'

import "./Project.css"

const Project = props =>
    <div className="row project">
        <div className="col-sm-4 col-xs-12">
            <img
                className="img-thumbnail img-responsive project-image"
                alt="" src={props.image}
                onClick={() => {
                    props.video ? props.showLightboxCallback(props.image, props.video) : props.showLightboxCallback(props.image, null)
                }}
                style={{ cursor: "pointer" }}
            />
        </div>
        <div className="col-sm-8 col-xs-12">
            <h3>{props.url != null ? (<a href={props.url}>{props.title}</a>) : (<span>{props.title}</span>)}
                {props.giturl && <GitLink url={props.giturl} />}
                {props.serverurl && <ServerLink url={props.serverurl} />}
                <small><br />{props.description}</small></h3>
            {props.children}
        </div>
    </div>

export default Project
