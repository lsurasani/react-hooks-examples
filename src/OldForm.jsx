import React from 'react';

export default class OldForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
                <div>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange} />
                </div>
            </header>
        </div>
        )
    }
}