import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = { user: {} }
    }

    componentDidMount() {
        this.setState({
            user: this.props.user
        });
    }

    render() {
        const user = this.state.user;
        return (
            <div>
                id: {user.id}<br />
                {/* <a href={`posts/${user.id}`}>name: {user.name}</a> <br /> */}
                <Link to={`posts/${user.id}`}>name: {user.name}</Link> <br />
                email: {user.email} <br />
                <br />
            </div >
        )
    }
}

export default User;