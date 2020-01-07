import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = props =>
    <div className="home">
        <div>
            <h1>RealTime Group Video Chat</h1>
            <p>Enter room ID:</p>
            <input type="text" name="room" value={ props.roomId } onChange={ props.handleChange } />
            <Link>Join Room</Link>
            <Link>Create Room</Link>
            { props.rooms.length !== 0 && <div>최근목록</div> }
            { props.rooms.map(id => <Link key={id} to={`/room` + id}>id</Link>)}
        </div>
    </div>

    const mapStateToProps = store => ({rooms: store.rooms});

    export default connect(mapStateToProps(Home));