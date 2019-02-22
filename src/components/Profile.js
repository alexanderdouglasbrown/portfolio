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
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Profile