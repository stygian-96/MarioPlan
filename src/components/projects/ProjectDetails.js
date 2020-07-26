import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className = "container section project-details">
            <div className = "card z-depth-0">
                <div className = "card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Rinkiya ke papa he he he has dele Rinkiya ke papa he he has dele he he he has dele
                    chat deni maar deli kheech ke tamacha Rinkiya ke papa he he he has dele he he he has dele.</p>
                </div>
                <div className = "card-action grey lighten-4 grey-text">
                    <div>Posted by Himanshu Vishwakarma</div>
                    <div>26 July, 9pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails