import React from "react"
import './Profile.css'

class Profile extends React.Component {
    render() {
        return (
            <div className="row profile">
                <div className="col-sm-4 col-xs-12">
                    <img className="img-responsive profile-pic" alt="" src={this.props.image} />
                </div>
                <div className="col-sm-8 col-xs-12">
                    <h2>{this.props.name}
                        <small><br />{this.props.title}</small></h2>
                    <a href={`mailto:${this.props.email}`}><i className="fa fa-envelope" aria-hidden="true"></i> alexanderdouglasbrown@gmail.com</a>
                    <br />
                    <a href={this.props.resume}><i className="fa fa-file" aria-hidden="true"></i> Resume</a>
                    <span className="smallGap"></span>
                    <a href={this.props.github}><i className="fa fa-github" aria-hidden="true"></i> GitHub</a>
                    <span className="smallGap"></span>
                    <a href={this.props.linkedin}><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</a>
                    <br />
                    <div className="profile-text">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile