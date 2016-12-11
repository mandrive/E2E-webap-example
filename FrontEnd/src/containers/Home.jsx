import React from 'react';
import { connect } from 'react-redux';

import * as ACTION_CREATORS from './../actionCreators/ActionCreators';
import PostsList from './Posts/PostsList';

@connect(state => ({ posts: state.posts.posts}))
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch({type:'FETCH_POSTS'});
    }
    render() {
        return (
            <div>
                <PostsList posts={this.props.posts} />
            </div>
        );
    }
}
