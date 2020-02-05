import React, {Component} from 'react'
import {Button, Card, Container} from 'react-bootstrap'
import { connect } from 'react-redux'
import {selectSong} from '../actions'

class SongSelected extends Component{
    
    render(){
        console.log(this.props.mySelectedSong)
        if(!this.props.mySelectedSong){
            return (
                <Container>
                <Card style={{ width: '100%' }}>
                   <Card.Body>
                       <Card.Title>Select A Song</Card.Title>
                   </Card.Body>
               </Card>
           </Container>
            )
        }
        return (
            <Container>
                 <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>{this.props.mySelectedSong.title}</Card.Title>
                        <Card.Text>
                        {this.props.mySelectedSong.singer}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

const mapStatetoProps = (state) =>{
    // console.log(state.selectedSong)
    return {mySelectedSong:state.selectedSong}
}

export default connect(mapStatetoProps,{ selectSong })(SongSelected);