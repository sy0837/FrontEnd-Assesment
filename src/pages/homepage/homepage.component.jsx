import React, { useState } from 'react'
import { TaskContainer } from '../../components/taskContainer/taskContainer.component'
import './homepages,styles.scss'
import { withRouter } from 'react-router-dom'
import { Card } from '../../components/card/card.component'
import ModalForm from '../../components/modal/modalForm.component'
import { Wrapper, Container } from '../../components/wrapper/wrapper.component'
import { Modal } from '../../components/modal/modal.component'


const Homepage = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    console.log(props);

    return (
        <Wrapper>
            <p className='heading'>*Any new News can be shown here or the direction of how the bootcamp is going on*<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit dolor, tempus ac augue id, facilisis interdum velit. Quisque commodo, augue sed accumsan sollicitudin, orci neque tempus elit, id imperdiet quam lacus ut quam. Donec ut leo risus.</p>
            <Container>

                <div style={{margin:'20px auto'}} onClick={() => setIsOpen(!isOpen)}>
                    <TaskContainer title="Create Task" icon="fas fa-plus fa-2x" />
                </div>
                {
                    isOpen ? <Modal>
                        <ModalForm />
                        <i className='fas fa-times fa-2x close' onClick={() => setIsOpen(false)}></i></Modal>  : null
                }

                <div style={{margin:'20px auto'}} onClick={() => {
                    props.history.push('/check')
                }}>
                    <TaskContainer title="Evaluate task" icon="fas fa-check fa-2x" />
                </div>

            </Container>
            <h1>Previous Tasks</h1>
            <Container>
            {
                    props.data.map(data => {
                        if(data.checkStatus){
                            return <Card key={data.id} {...data}/>
                        }
                        else{
                            return null
                        }
                    }
                        
                    )
                }
             
            </Container>

        </Wrapper>
    )
}

export default withRouter(Homepage)