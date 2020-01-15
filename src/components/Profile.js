import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './Profile.css'

const Profile = props =>
    <div className="row profile">
        <div className="col-sm-4 col-xs-12">
            <img className="img-responsive profile-pic" alt="" src={props.image} />
        </div>
        <div className="col-sm-8 col-xs-12">
            <h2>{props.name}
                <br /><small>{props.title}</small></h2>
            <div className="row">
                <div className="col-xs-12">
                    <div style={{ whiteSpace: "nowrap", overflowX: "hidden" }}>
                        <a href={`mailto:${props.email}`}><FontAwesomeIcon icon={faEnvelope} />&nbsp;alexanderdouglasbrown@gmail.com</a>
                    </div>
                </div>
                <div className="col-xs-6 col-md-3">
                    <a href={props.resume}><FontAwesomeIcon icon={faFile} />&nbsp;Resume</a>
                </div>
                <div className="col-xs-6 col-md-3">
                    <a href={props.github}><FontAwesomeIcon icon={faGithub} />&nbsp;GitHub</a>
                </div>
                <div className="col-xs-6 col-md-3">
                    <a href={props.linkedin}><FontAwesomeIcon icon={faLinkedin} />&nbsp;LinkedIn</a>
                </div>
                <div className="col-xs-6 col-md-3">
                    <a href={props.instagram}><FontAwesomeIcon icon={faInstagram} />&nbsp;Instagram</a>
                </div>
            </div>
            <div className="profile-text">
                {props.children}
            </div>
        </div>
    </div>

export default Profile
