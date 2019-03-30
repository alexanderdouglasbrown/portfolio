import React from "react"
import './Profile.css'

const Profile = (props) => {
    return (
        <div className="row profile">
            <div className="col-sm-4 col-xs-12">
                <img className="img-responsive profile-pic" alt="" src={props.image} />
            </div>
            <div className="col-sm-8 col-xs-12">
                <h2>{props.name}
                    <small><br />{props.title}</small></h2>
                <a href={`mailto:${props.email}`}><i className="fa fa-envelope" aria-hidden="true"></i> alexanderdouglasbrown@gmail.com</a>
                <br />
                <a href={props.resume}><i className="fa fa-file" aria-hidden="true"></i> Resume</a>
                <span className="smallGap"></span>
                <a href={props.github}><i className="fa fa-github" aria-hidden="true"></i> GitHub</a>
                <span className="smallGap"></span>
                <a href={props.linkedin}><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</a>
                <br />
                <div className="profile-text">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Profile