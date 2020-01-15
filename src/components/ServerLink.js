import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer } from '@fortawesome/free-solid-svg-icons'

const ServerLink = props =>
    <a href={props.url}> <FontAwesomeIcon style={{fontSize: "2rem"}} icon={faServer} /></a>

export default ServerLink
