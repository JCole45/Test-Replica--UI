import React, { Component } from 'react';
import whitelogo4 from './images/whitelogo4.png'
import { Grommet, Box, FormField, Button, Select, TextInput, Tabs, Tab, DropButton } from 'grommet';
import './App.css';


  let a = 'data:image/jpeg;base64,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'
class Chat extends Component {

    constructor(props){
        super(props)
        this.state={
            user_picture: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAoAMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA9EAABAwMCAwQFCgQHAAAAAAABAAIDBAUREiEGMUETIlFhByMygaEUQlJxkaKxwdHhcnPw8RUkRGKCg8L/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAYCAwUB/8QAMhEAAgIBAgQEBAUEAwAAAAAAAAECAxEEIQUSMUETImFxMlGB8BQjM7HBkaHh8UJS0f/aAAwDAQACEQMRAD8A5OtxiEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBOWPhW4Xtjn0ro2saQHF+QQTggAY7xwQdvEJuRLtXGppNdT1fOE7lZozLOGSRA4JbnI67tIyNgSm4p1kLJcnRkChLCAIAgCAIAgCAIAgCAIAgCAIAgbwZpaWWKFkzgDG/kWuBWTg0smmvUQsm4LqjCBqIbnAJxleG1s6lwI6eGzVdRBqzJUOLdBxoyGadzts1uPettdblvkrPE7mrIwit0uvqbHHMdVNau3qJ2TFzo3vcOfeDmubkbZAJ+vZezinXsadE5fi05PLcc/Xt+xyXBGx5haC2+pmbTPNOZssDQcYJ3PuW9UTcOc1+I+fkUW/ZGFaDaEPAgCAIAgCAIAgCAIAgCAm+F+zjq31MtIamKnidNLhodpaC0E77ci5dLh1fPPHv/g0yk0yV4prrXc4ZprPaHwU7XgGV5y7JJz7O2NjtvjHRTtVppV6bNksv0NalFy2Kec9Oar5JR0Pg6OOeyTz6H6PlelrXSOw7DckkZxndTtLCMslX4w5VSjvv7Iy8TRMhsJqT2wjbURB4bI4geB0kkHcBe6iEYwNfC3ZZdjbo+y/f2ObsG7QfJQV1LdsX23V9NauFaWR1LTvqZ36omseQ9nefu7Gc/M2Oy7unrbguuP7fQ7NFk41rlbSKpxA6SW4PmmjbG+QBxDcY5Dw+orn66KjZsc/V/qZI1QSKEAQBAEAQBAEAQBAEAQE/wm2SWonjgLy4wYLdLcHL2DGTnff4Lp8OcefDZpmnltErfamjqLICzW18czWTloD8gOOk6sDwHInYqdrozqh53tlGiKby09ymPOpzj5kqvMlxWEjqvDdL8i4RtcTj6yYSTv2+mct+7hdLSLESn8btU9Rt22Nm8W91dwrdaZrCXiHt48dSwh3/AJTVrMTDg1yjqEmchYRqaTy8vBc+Lw1kukllYLpTQPHBUNUZWthkmMTYy8h5wSRs3GRt18VYNJKM4KKznGTrafzRju9v6FZvDS2eLW8uLoWObsPZ3HTzBXO4ltdjfJG1n6mDQXOIYQBAEAQBAEAQBAEAQBAWjg589JFLUUzZBUTzxwQStx3Hb8sjGcHr+q7HDaouLnPo/wCDTbLBm4inpauOsit9DPGyHYzPdkvDMHLh0xpf1UvURlZpZqTy1v8A6NUJLnwiu2agN1u9HQNz/mJmscQeTc94+5oJVcW7N91iqrlN9kdZutTFTgytYRHHH6sNHstGw/ryXVrajAoMYyvnzf8AZm9ZZ3MeGvGrEhaR/tKWRzkxqlyXRaOP8T2z/Bb/AF9ABiOKU9n/ACz3m/Age5ctrDwX+mfiVqRZbpRmlprRQ9mwSR0rO0cZNAbI4anDUds5z8FZtEnHTHeoTjQiO4nt+LLarnHIyRj9cLg32o8HIDh06rncWWbM46EXiEfMmVhckgBAEAQBAEAQBAEAQBAfCcAnwQF1gpJqCW2U3YkOYwOc/m0OcXO5bjf8lbNLCEaVAhapNSyeaKpbDUQyPp3PjmndG4H2SHePkASsYxjLMc9TTW2rtzDwNSim42kp3/6aOoDfMgFo/FVyMOW7lHGHjRTLDXuaam6wTSTOIp8OZk+rAwMtHLOxKkRWcrJwa/JXVhd8ff7FksoLKwNO4ljDjty2zlbrN1kg0r85RfqVLj+hjqPSTboXEBksEL5PMNc/P2huFCjDntSLtw5NwUfU1bjVGsnnkezJFUG8/mt/urXCGFhdiyuG+I9ka0UZlttwt07XaXtEsO2MHm0/BvuKjaurxqpJGNtfiVvcpoOQCFVUcU+oAgCAIAgCAIAgCAID60ZcB4kBZR+JA6Dd6jRe4zC2EvxHrLxl3dAcC0Z2zu0/urNhqK+pE1jx/YiI3z00MDt5TE5r36DnfUc/kD9SxoUnJIiKWL/oSHCbmzekite3G8VQW436BcOxY1DXqbOKYejkSdUyV/EDi9w9ZDO1unHLkc/llb4R8+GcB2Y0uUujRcrfT6a+N4G3Yfl+6znLyGmmvGpT9CpcYs1+lK1NHN9CBv8A9yj0vlviy48MeGvcjZaIRmcgtLRM8lwPj/ZWmMstFmWOdP0/giaN0gfUaTqy3DSPI4TlWGzKMVylUVLK6F4AgCAIAgCAIAgCAIDLSs7Sqgj+nI1v2kLKHxL3Bfr/AGWqfxXLS0x7ZxgZpcW6O9sA3OO8Tttvz8lY1OMqlN7bkHWJylhGJ9DNA6po2wMeH1L2sZgb7nIH4eBz9S20wjnnf3kixbV/Ke+DKDsfSdcKKTIMcVQNzkg93H4qvWT5rnJd2SOIwUtLKLLDNR9pfPlWvVJoeHtDcYaBjn57H3KRXhvKKo9SnU09y4U0TRO3+Db4LCb2J9cUpp+hRuNW49J9hfj26cNx75P1Wqp/mosfDHnf1NWSmkY2oEoBIqjnvdCQPwyrQpJ4x8izuSco+xqWS2wT1dRT63Gd7JGwsGA3UTzJPTf3lLpyrgpJbZ3M3LlqTRz2RpZI5pGC1xBCqEviZX31Z5WJ4EAQBAEAQBAEAQBAbVpGbvbx41cI++FlD4kDqF0mmk40llE4cyCVpjDpuThpJLW9DtjI8lZK4paVLHUgavPiR9yPqqyamnoqp7SXmfW1mfazqLQT7wpSrU1KEemCHBtapSf3uj7wm/tPS/dJCPabUE/a1VVrE2iZxB/k49ScnqjG2sqmgFzYnNGeRLngfmpVaxFFM01eW89C2UPs0hHWBp+AWEt0zrwSUo4+RSuOwW+kfho4B9QRj3uWqv8AVRY+H9Eat0fJ/htdh5D2yk5B8wrPUl4kfYssUvFierY+GO4Etja54YC4k9Bg4HTf9FjapOvd9zLlfJh9Ms5lcxpula0chUyD7xVUn8TOFLaTNZYmIQBAEAQBAEAQBAEBvWFuq/WtuM5rYNvH1jVtpi5TR43udoqrHG68S1rnP7QFzo8N3OQPa36dMLsR1L8NQ+/p/JG1NXM1JdmRrbBK8QQmHtN3ODi7Gk+O/Pl8VKerim2nghwhnVcuM7fyiL4NpnD0pXd2Nmx1HL+Nq4c01LPzM9bJSrlEsklIBS1jQPa07f8AP9lui9kilwniM399SwUgIFJ/JAWqXc7NUvgfoU7j6J7vSBwqdPttcB54J/VaYSXiIsvD85SPdwt1aKW4SsikDmu1A4GQdiDlWCu6pyhFssCtj40E2a0NrcJpJu0IOiI50nOS3fl1BA+1bHesKOPmboWyaw492cwv8Ziv90jPNtZMPvlViz42cSxYm0aKwMQgCAIAgCAIAgCALOHLnzHks9iz8AttjuJLf8ubN2onY6J7XgBrgQQcY8V2qq6vAk6lvh9TGuabw+p+i3VMfXC4irY5X3YE0ZOQ0OPTzXri0eOO5SbBQwxcdVlTG3LKgyMeQ/J3OSeXLIW7VatYhSo+bHU4C1UJ6904eHlP/wBLhLa7cQ5uGgHGdua0Rus6kqXCtC00l1PTaOkjDQHbNG2x2XvPNmcdFpopLPQoXH9PJUcWWGVuWRUTmlkmrDsl4OR4jYbL3TuDucJrdrY3aXW0Va2NM08dP653LRU8R29r8S9kMci4DAP1qTHR2Y2LJHTN/wDIwHi21wSaSImEjOzeaz/AWyWTd+An1ycC4kdDJe6+WMucZKiR7nH5xLic/Fa9VXCufKupE1qojY4wW/uRShkAIAgCAIAgCAIAgCHjNq3TmmrYJgcFjw4Hw3XV4bNKzDI001JMv9dxbNUMDu0cyIHAAONZ/RdyvR1xNGpsk+nQ8t4vrnRkdpp7owR0C8lpKEyE9RdjBK8K3VzauWYOGtw2PvVa4lNQu5jgax2UzVkOpYzfpWlzhMNyDy8Fy/xeXsRI63WZznrg8S8Ryklply4O5gYwtyufyM56vWWLeRAcX3F0sERdJl55ZKz0snLUqXyNuidttjlN5KLPeZ3ktlkO3X6QVk8ZF80utsfKpPdfe5pyXGR3MkjwJXn4zHY7C4g0tkRk7zJI556nK4d8+ebkcycueTl8zGtB4EAQBAEAQBAEAQBAFv08nGxGuxZRnNQ44HJoGAPBd163tHsRrPMZ4qt4IGVDeqk2RpVInLHcHRSSPLh3Wn3rnan8zOTm6vTqSSJKrur3QAROAcD81RIUJESvSpT8x5fcQ6XBdhxw5p8f6wpKrR6tNiPQ0eJK98jYg52W4y3xSuChLKJWgoUctFXkeXOzlSZ3M7dUT5r8Vh4hMUmeXblRpPLPT4sQEAQBAEAQBAEAQBAF6ngMLarGlg1OGT6DgrznZjKo26abRG/fc9F7kh3V+YztqHGTc7ZC8RpdawfDWO7YAk5ZkZXudzLwfLn5mCqqHTsbk50nARy2NtFSjI1VryT1ELzJkj4h6F4AgCAIAgP/2Q==',
            user_name: 'John Doe'
        }
    }

    render() {
        return (
            <Grommet>
                <div >
                    <Box direction="column" background="white">

                    <Box background="purple" style={{height:"160px"}} direction="row" justify="stretch" overflow="scroll"> 
                    <div >
                    <img src={whitelogo4} style={{ height: '125px', width: '150' }} /> </div>

                    <div className="Chat-header"><p className="Chat-header">Messges</p></div>
                    </Box>


                    <Box background="light-2" style={{height:"70px"}}>
                    <div className="user-image"><img  src={this.state.user_picture} width="60px" height="60px" /></div> 
                    </Box>


                    <Box background="white" style={{height:"400px"}} 
                    overflow="scroll" direction="column" >

                    <div className="speech-bubble" >
                    <span className="message">
                        <p> Price is right </p>
                        <p className="time">11:09am</p>
                    </span>
                    </div>
                    </Box>


                    <TextInput placeholder="type here..."/>

                    
                    </Box>
                </div>
            </Grommet>
        )
    }
}

export default Chat