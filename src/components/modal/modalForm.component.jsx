import React from 'react'
import FormInput from '../form-input/forminput.component'
import './modal.styles.scss'
import { Wrapper } from '../wrapper/wrapper.component'
// import axios from 'axios'


class ModalForm extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            taskname: '',
            desc: '',
            img: '',
            level: 'Select Level'
        }
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    onSubmit = () => {
        localStorage.setItem(this.state.id, JSON.stringify(this.state))
        //for storing it using external api we can use axios to post the data.
    }
    render() {
        return (
            <Wrapper>
                <div className='form'>
                    <h2>Enter The Following Details</h2>
                    <span>Create the task</span>
                    <form>
                        <FormInput
                            name='id'
                            type='input'
                            value={this.state.id}
                            required
                            handleChange={this.handleChange}
                            label='Task ID(To identify Task)'
                        />
                        <select name='level' required handleChange={this.handleChange} value={this.state.mycar}>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>

                        <FormInput
                            name='taskname'
                            type='text'
                            value={this.state.taskname}
                            required
                            handleChange={this.handleChange}
                            label='Task Name'
                        />
                        <FormInput
                            name='desc'
                            type='text'
                            value={this.state.desc}
                            required
                            handleChange={this.handleChange}
                            label='Description'
                        />
                        <FormInput
                            name='img'
                            type='file'
                            value={this.state.img}
                            required
                            handleChange={this.handleChange}
                        // label='Description'
                        />
                        <button type='submit' onClick={this.onSubmit}>Make Task</button>
                    </form>
                </div>
            </Wrapper>
        )
    }
}

export default ModalForm