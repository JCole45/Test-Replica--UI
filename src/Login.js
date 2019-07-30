import React, { Component } from 'react';
import { Grommet, FormField, TextArea, Button, Grid, TextInput } from 'grommet';
import CssBaseline from '@material-ui/core/CssBaseline';

class Login extends Component {

    render() {
        return (
            <Grommet>
                <CssBaseline />
                <div className="Login">


                    <form>
                    <FormField label="Email" name="email">
                        <TextInput placeholder="" />
                    </FormField>

                    <FormField label="Password" name="password">
                        <TextInput placeholder="" />
                    </FormField>
                    
                    <div className="submit">
                    <Button type="submit" style={{ width: '100%', height: 50 }} label="LOG IN">LOG IN</Button>

                    </div>
                    
                    <div className="account-button">
                    <Button plain="plain" label="CREATE ACCOUNT"></Button>
                    </div>

                    </form>


                </div>
            </Grommet>
        )
    }

}

export default Login