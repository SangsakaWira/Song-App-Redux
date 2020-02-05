import React, {Component} from 'react'
import {Table, Container, Button, Card} from 'react-bootstrap'
import { connect } from 'react-redux'
import {selectSong} from '../actions'

class SongsList extends Component{
   
    renderList(){
        return this.props.songs.map((song)=>{
            return(       
                <tbody className="item" key={song.title}>
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.singer}</td>
                        <td><Button onClick={()=>this.props.selectSong(song)} >Select</Button></td>
                    </tr>
                </tbody>
            )
        })
    }

    render(){
        console.log(this.props)
        return (
            <Container style={{marginTop:"20px"}}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Singer</td>
                            <td>Detail</td>
                        </tr>
                    </thead>
                    
                {this.renderList()}
                </Table>
            </Container>
        )
    }
}

const mapStatetoProps = (state) =>{
    return {songs:state.songs, SongsListselectedSong:state.selectedSong}
}

export default connect(mapStatetoProps,{ selectSong })(SongsList);