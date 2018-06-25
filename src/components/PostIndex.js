import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostIndex extends Component
{
	//automatically called by react when the component is rendered by the dom
	componentDidMount()
	{
		this.props.fetchPosts();
	}

	renderPosts()
	{
		return _.map(this.props.posts, post => 
		{
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={ `/posts/${post.id}` }>
						{post.title}
					</Link>
				</li>
			);

		})
	}

	render()
	{
		return(
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="posts/new">
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}
//used to place aplication level state into the component props
function mapStateToProps(state)
{
	//sets the list of posts from the action to be the posts prop
	return { posts: state.posts };
}

export default connect (mapStateToProps, { fetchPosts })(PostIndex);