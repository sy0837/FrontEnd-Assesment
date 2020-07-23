import React, { useState } from 'react'
import './card.styles.scss'
import { Modal } from '../modal/modal.component'
import { Wrapper } from '../wrapper/wrapper.component'
import StudentWorkCard from './studentwork.component'

export const Card = (props) => {
    const [showStudent, setShowStudent] = useState(false)
    return (
        <div style={{margin: '20px auto'}}>
        <div className='card' onClick={() => setShowStudent(!showStudent)}  >
            <img className='task-img' src={props.imageUrl} alt='img' />
            <div className='details'>
                <div>
                    <h3>{props.title}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> *Task Details* </p>
                </div>
                <div className='prog'>
                    <span >Evalution Status: {props.checkStatus ? <span>Checked</span> : <span>UnChecked</span>}</span>
                </div>
            </div>
            </div>
            {
                showStudent ? <Modal>
                    <Wrapper>
                        <i className='fas fa-times fa-2x close' onClick={() => setShowStudent(false)}></i>
                        {
                            props.entries.map(ent => <StudentWorkCard key={ent.id} {...ent} />)
                        }
                    </Wrapper>
                </Modal> : null
            }
            </div>
    )
}