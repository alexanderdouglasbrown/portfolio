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
                <small><br />{props.title}</small></h2>
            <a href={`mailto:${props.email}`}><FontAwesomeIcon icon={faEnvelope} />&nbsp;alexanderdouglasbrown@gmail.com</a>
            <br />
            <a href={props.resume}><FontAwesomeIcon icon={faFile} />&nbsp;Resume</a>
            <span className="smallGap"></span>
            <a href={props.github}><FontAwesomeIcon icon={faGithub} />&nbsp;GitHub</a>
            <span className="smallGap"></span>
            <a href={props.linkedin}><FontAwesomeIcon icon={faLinkedin} />&nbsp;LinkedIn</a>
            <span className="smallGap"></span>
            <a href={props.instagram}><FontAwesomeIcon icon={faInstagram} />&nbsp;Instagram</a>
            <br />
            <div className="profile-text">
                {props.children}
            </div>
        </div>
    </div>

export default Profile
