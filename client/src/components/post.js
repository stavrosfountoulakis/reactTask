import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import Posts from './posts'

class UserPost extends Component {

    constructor(props) {
        super(props);
        this.state = { post: {} }
    }

    componentDidMount() {
        this.setState({
            post: this.props.post
        });
    }

    render() {
        const post = this.state.post;
        return (
            <div>
                <h1>{post.title}</h1><br />
                id: {post.id}<br />
                {/* <Link to={{
                    pathname: `/comments/${post.id}`,
                    state: { post_id: post.id },
                    pure: false
                }
                }>message: {post.message}</Link> <br /> */}

                <Link to={`/comments/${post.id}`}>message: {post.message}</Link> <br />
                {/* <a href={`/comments/${post.id}`}>message: {post.message}</a> <br /> */}
                user_id: {post.user_id}<br />
                user_name: {post.user_name}<br />
                date: {post.date}<br />
            </div >
        )
    }
}

export default UserPost;