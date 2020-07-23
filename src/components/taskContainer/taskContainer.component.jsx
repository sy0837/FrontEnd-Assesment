import React from 'react'
import './taskContainer.styles.scss'

export const TaskContainer =(props) =>{
    return(
        <div className='taskContainer'>
            <h1 className='title'>{props.title}</h1>
            <div className='icon'><i className={props.icon}></i></div>
        </div>
    )
}