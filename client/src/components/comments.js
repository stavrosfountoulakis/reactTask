import React, { Component } from 'react';

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = { post_id: null, comments: [] }
    }

    componentDidMount() {
        const postId = this.props.match.params.id,
            urlToCall = `/comments/${postId}`;

        fetch(urlToCall)
            .then((response) => response.json())
            .then((comments) => { this.setState({ comments }) });

        this.setState(this.state);
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment) =>
                    < div key={comment.id} >
                        <h1>message: {comment.message}</h1><br />
                        id: {comment.id}<br />
                        date: {comment.date}<br />
                        post: {comment.post}<br />
                        author: {comment.author}<br />
                    </div>
                )}
            </div>
        )
    }
}

export default Comments;