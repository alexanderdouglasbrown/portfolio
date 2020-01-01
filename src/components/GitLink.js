import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const GitLink = props =>
    <a href={props.url}> <FontAwesomeIcon style={{fontSize: "2rem"}} icon={faGithub} /></a>

export default GitLink
