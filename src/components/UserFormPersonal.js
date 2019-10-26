import React, { Component } from 'react'
import { AppBar, TextField, RaisedButton } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export class UserFormPersonal extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    goBack = e => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        const { values } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='User Form Personal'/>
                    <TextField
                        hintText='Occupation goes here'
                        floatingLabelText='Occupation'
                        onChange={this.props.handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField
                        hintText='Age goes here'
                        floatingLabelText='age'
                        onChange={this.props.handleChange('age')}
                        defaultValue={values.age}
                    />
                    <br/>
                    <TextField
                        hintText='City goes here'
                        floatingLabelText='City'
                        onChange={this.props.handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br/>
                    <TextField
                        hintText='Bio goes here'
                        floatingLabelText='Bio'
                        onChange={this.props.handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br/>
                    <RaisedButton 
                        label='Go back'
                        primary={false}
                        onClick={this.goBack}
                        style={style.btn}
                    />
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

export default UserFormPersonal
