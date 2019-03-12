import React from 'react';
import { useInputValue } from './Custom'

const Form = () => {
    const firstName = useInputValue('')
    const lastName = useInputValue('')
    const email = useInputValue('')
    const password = useInputValue('')
    const confirmPassword = useInputValue('')

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <input type="text" placeholder="First Name" {...firstName} />
                </div>
                <div>
                    <input type="text" placeholder="Last Name" {...lastName} />
                </div>
                <div>
                    <input type="text" placeholder="Email" {...email} />
                </div>
                <div>
                    <input type="password" placeholder="Password" {...password} />
                </div>
                <div>
                    <input type="password" placeholder="Confirm Password" {...confirmPassword} />
                </div>
            </header>
        </div>
    );
}

export default Form;