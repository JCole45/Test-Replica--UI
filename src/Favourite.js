import React, { Component } from 'react';
import whitelogo4 from './images/whitelogo4.png'
import { Grommet, Box, FormField, Button, Select, TextInput, Tabs, Tab, DropButton } from 'grommet';
import './App.css';



class Fav extends Component {


    render() {
        return (
            <Grommet>
                <div >
                <Box background="white" direction="column">
                <Box background="purple" style={{height:"130px"}} direction="row" justify="stretch" overflow="scroll"> 
                    <img src={whitelogo4} style={{ height: '125px', width: '150' }} /> 
                    <div className="Chat-header"><p className="Chat-header">Favourites</p></div>
                </Box>

                <Box background="" style={{height:"900px"}}>

                </Box >
                </Box>

                </div>
            </Grommet>
        )
    }
}

export default Fav