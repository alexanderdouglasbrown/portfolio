import React from "react"

const GitLink = (props) => {
    return (
        <a href={props.url}> <i className="fa fa-github" aria-hidden="true"></i></a>
    )
}

export default GitLink