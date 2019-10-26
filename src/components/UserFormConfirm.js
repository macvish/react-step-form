import React, { Component } from 'react'
import { AppBar, RaisedButton } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { grey100 } from 'material-ui/styles/colors'

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
                    <AppBar title='Confirm Form'/>
                    <h4 style={style.title}>First Name</h4>
                    <p>{values.firstname}</p>
                    <h4 style={style.title}>Last Name</h4>
                    <p>{values.lastname}</p>
                    <h4 style={style.title}>Email</h4>
                    <p>{values.email}</p>
                    <h4 style={style.title}>Occupation</h4>
                    <p>{values.occupation}</p>
                    <h4 style={style.title}>Age</h4>
                    <p>{values.age}</p>
                    <h4 style={style.title}>City</h4>
                    <p>{values.city}</p>
                    <h4 style={style.title}>Bio</h4>
                    <p>{values.bio}</p>
                    <br/>
                    <RaisedButton 
                        label='Go back'
                        primary={false}
                        onClick={this.goBack}
                        style={style.btn}
                    />
                    <RaisedButton 
                        label='Confirm'
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
    },
    title: {
        color: '#cbd5e0',
    }
}

export default UserFormPersonal
