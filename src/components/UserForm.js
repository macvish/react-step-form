import React, { Component } from 'react'
import FormDetails from './UserFormDetails'
import FormPersonal from './UserFormPersonal'
import FormConfirm from './UserFormConfirm'
import FormSuccessful from './UserFormSuccessful'

export class UserForm extends Component {
    state ={
        step: 1,
        firstname: '',
        lastname:  '',
        email: '',
        age: '',
        occupation: '',
        city: '' ,
        bio: '',
    }
    
    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({step: step + 1})
    }
    
    // Go back to prev step
    prevStep = () => {
        const { step } = this.state
        this.setState({step: step - 1})
    }

    // Handle input Change
    handleChange = input => e => this.setState({[input]: e.target.value})

    render() {
        const { step } = this.state
        const { firstname, lastname, email, age, occupation, city, bio } = this.state
        const values = { firstname, lastname, email, age, occupation, city, bio }

        switch (step) {
            case 1:
                return <FormDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
            case 2:
                return <FormPersonal
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
            case 3:
                return <FormConfirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}/>
            case 4:
                return <FormSuccessful />
            default:
                break;
        }
    }
}

export default UserForm
