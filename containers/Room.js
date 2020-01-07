import React, { Component } from "react";
import MediaContainer from  "./MediaContainer";
import CommunicationContainer from "./CommunicationContainer";
import { connect } from "react-redux";
import store from "../store";
import io from "socket.io-client";

class Room extends Component {
    constructor(props){
        super(props);
        this.getUserMedia = navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        }).catch(error => alert(`❌ Failed at getUserMedia(): ${error.name}`))
    }
    render() {
        return(
            <>
                <MediaContainer media={media => this.media=media} socket={this.socket} getUserMedia={this.getUserMedia} />
                <CommunicationContainer socket={this.socket} media={this.media} getUserMedia={this.getUserMedia} />
            </>
        )
    }
}

const mapStateToProps = store => ({rooms: new Set([...store.rooms])});
const mapDispatchToProps = (dispatch, props) => (
    {
        addRoom: () => store.dispatch({ type: "ADD_ROOM", room: props.match.params.room })
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Room);