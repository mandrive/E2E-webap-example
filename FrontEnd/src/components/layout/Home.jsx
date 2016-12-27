import React from 'react';
import { connect } from 'react-redux';
import PostsList from './../posts/postsList';

@connect(state => ({ posts: state.posts.posts}))
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTogglingDivVisible: true
        }
    }
    componentDidMount() {
        this.props.dispatch({type:'FETCH_POSTS'});
    }
    toggleDiv() {
        this.setState({
            isTogglingDivVisible: !this.state.isTogglingDivVisible
        });
    }
    render() {
        const { toggleDiv } = this;

        return (
            <div>
                <div ref="togglingDiv" className={this.state.isTogglingDivVisible ? 'magictime spaceInUp' : 'magictime spaceOutUp'}><h2 onClick={toggleDiv.bind(this)} >Hello there!</h2></div>
                <PostsList posts={this.props.posts} />
            </div>
        );
    }
}
