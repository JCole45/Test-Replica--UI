import React, { Component } from 'react';
import whitelogo4 from './images/whitelogo4.png'
import { Grommet, Box, FormField, Button, Select, TextInput, Tabs, Tab, DropButton } from 'grommet';

let Action = ['Buy', 'Rent', 'Lease Out']
var holder = "select"

const myTheme = {
    global: {
      font: {
        family: 'Roboto',
      },
      tab: {
          color: "control"
      }
    },
  };
  

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            holder: '',
            buy: '',
            rent: '',
            lease: '',
            lease_location: '',
            buy_location: '',
            rent_location: '',
        }
    }

    render() {
        return (
            <Grommet theme={myTheme}>
                <div >
                    <div className="Home-align">
                        <img src={whitelogo4} style={{ height: '125px', width: '150', margin: '30px' }} /> </div>

                    <div className="Home-content">
                        <div margin="80px">I would like to {this.state.holder}  </div>


                        <Tabs  >

                            <Tab title="Buy" margin="90px"   >
                                <form className="Home-content">
                                    <div >
                                        <FormField style={{ width: "550px" }} justify="center" >
                                            <Select value={this.state.buy} options={['House', 'Apartment', 'Office', 'Warehouse']} onChange={(option) => this.setState({ buy: option })} size="xsmall" />
                                        </FormField> </div>

                                    Located In

                                    <FormField style={{ width: "550px" }}>
                                        <Select value={this.state.buy_location} options={['Accra', 'Tema', 'Kumasi', 'Axim']} onChange={(option) => this.setState({ buy_location: option })} size="xsmall"/>
                                    </FormField>
                                </form>

                                <div >
                                    <Button className="account-button2" plain="plain" label="SEARCH"></Button> </div>
                            </Tab>

                            <Tab title="Rent" margin="90px" onActive={() => alert("hos")}>
                                <form>
                                    <FormField style={{ width: "550px" }} justify="center" className="formField">
                                        <Select value={this.state.rent} options={['House', 'Apartment', 'Office', 'Warehouse']} onChange={(option) => this.setState({ rent: option })} size="xsmall" />
                                    </FormField>

                                    Located In

                                    <FormField style={{ width: "550px" }}>
                                        <Select value={this.state.rent_location} options={['Accra', 'Tema', 'Kumasi', 'Axim']} onChange={(option) => this.setState({ rent_location: option })} size="xsmall" />
                                    </FormField>
                                </form>
                                <div >
                                    <Button className="account-button2" plain="plain" label="SEARCH"></Button> </div>
                            </Tab>

                            <Tab title="Lease Out" margin="90px">
                                <form>
                                    <FormField style={{ width: "550px" }}>
                                        <Select value={this.state.lease} options={['House', 'Apartment', 'Office', 'Warehouse']} onChange={(option) => this.setState({ lease: option })} size="xsmall" />
                                    </FormField>

                                    Located In

                                    <FormField style={{ width: "550px" }}>
                                        <Select value={this.state.lease_location} options={['Accra', 'Tema', 'Kumasi', 'Axim']} onChange={(option) => this.setState({ lease_location: option })} size="xsmall" />
                                    </FormField>
                                </form>

                                <div  >
                                    <Button className="account-button2" plain="plain" label="SEARCH" onClick={()=> alert("bosy")}></Button> </div>
                            </Tab>


                        </Tabs>



                    </div>
                </div>
            </Grommet>
        )
    }
}

export default Home