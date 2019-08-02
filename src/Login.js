import React, { Component } from 'react';
import { Grommet, FormField, TextArea, Button, Grid, TextInput } from 'grommet';
import CssBaseline from '@material-ui/core/CssBaseline';
import whitelogo4 from'./images/whitelogo4.png'


class Login extends Component {

    render() {
        return (
            <Grommet>
                <CssBaseline />
                <div className="Login">
                <div><img src={whitelogo4} style={{height:'250px', width:'300px', margin:'30px'}}/></div>



                    <form>
                    <FormField label="Email" name="email" style={{width:350}}>
                        <TextInput placeholder="" />
                    </FormField>

                    <FormField label="Password" name="password" style={{width:350}}>
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