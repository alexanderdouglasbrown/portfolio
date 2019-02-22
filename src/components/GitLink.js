import React from "react"

class GitLink extends React.Component {
    render() {
        return(
            <a href = {this.props.url}> <i className="fa fa-github" aria-hidden="true"></i></a>
        )
    }
}

export default GitLink