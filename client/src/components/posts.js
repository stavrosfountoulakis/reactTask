import React, { Component } from 'react';

import UserPost from './post';
class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = { user_id: null, posts: [] }
    }

    componentDidMount() {
        const userId = this.props.match.params.id,
            urlToCall = `/posts/${userId}`;

        fetch(urlToCall)
            .then((response) => response.json())
            .then((posts) => this.setState({ posts }));
    }

    render() {
        return (
            <div>

                {this.state.posts.map((post) =>
                    < div key={post.id} >
                        <UserPost post={post} />
                    </div>
                )}
            </div>
        )
    }
}

export default Posts;