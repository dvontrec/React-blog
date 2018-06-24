import axios from 'axios';

const rootURL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=reduxapp5003'
export const FETCH_POSTS = 'fetch_posts'
export const CREATE_POST = 'create_post'

export function fetchPosts()
{	
	const request = axios.get(`${rootURL}/posts${API_KEY}`);
	return{
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(values, callback)
{
	const request = axios.post(`${rootURL}/posts${API_KEY}`, values)
	.then(() => callback());
	return{
		type: CREATE_POST,
		payload: request
	};
}