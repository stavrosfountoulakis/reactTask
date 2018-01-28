import React, { Component } from 'react';

import User from './user'
class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    componentDidMount() {
        fetch('/home')
            .then((response) => response.json())
            .then((users) => { this.setState({ users }) });
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                {this.state.users.map((user) =>
                    < div key={user.id} >
                        <User user={user} />
                    </div>
                )}
            </div>
        )
    }
}

export default Users;
