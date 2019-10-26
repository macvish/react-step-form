import React, { Component } from 'react'
import { AppBar, TextField, RaisedButton } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export class UserFormDetails extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const { values } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='User Form Details'/>
                    <TextField
                        hintText='First Name goes here'
                        floatingLabelText='First Name'
                        onChange={this.props.handleChange('firstname')}
                        defaultValue={values.firstname}
                    />
                    <br/>
                    <TextField
                        hintText='Last Name goes here'
                        floatingLabelText='Last Name'
                        onChange={this.props.handleChange('lastname')}
                        defaultValue={values.lastname}
                    />
                    <br/>
                    <TextField
                        hintText='Email goes here'
                        floatingLabelText='Email'
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton 
                        label='Continue'
                        primary={true}
                        onClick={this.continue}
                        style={style.btn}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const style = {
    btn: {
        margin: 15
    }
}

export default UserFormDetails
