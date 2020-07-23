import React from 'react'
import FormInput from '../form-input/forminput.component'
import './card.styles.scss'

class StudentWorkCard extends React.Component {
    constructor() {
        super()
        this.state = {
            score: ''
        }
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    onSubmit = e => {
        e.preventDefault()
        window.localStorage.setItem(this.props.id, JSON.stringify(this.state))

    }
    render() {
        console.log(this.state.score);
        return (

            <div className='student-card'>
                <img className='student-img' src={this.props.imageUrl} alt='img' />
                <div className='details'>
                    <h3 className='student-name'>{this.props.title}</h3>
                    <span>Student Id:{this.props.id}</span>
                    <form>

                        {
                            this.props.checked ?
                                <span className='score'>Marks Scored: {this.props.score}</span> :
                                <div className='score-sub'>
                                    <FormInput
                                        name='score'
                                        type='number'
                                        value={this.state.score}
                                        required
                                        handleChange={this.handleChange}
                                        label='Enter Score(1-10)'
                                        min='1'
                                        max='10'
                                    />
                                    <button className='submit-button' onClick={this.onSubmit}>Submit score</button>
                                </div>
                        }
                    </form>
                </div>
            </div>
        )
    }

}
export default StudentWorkCard