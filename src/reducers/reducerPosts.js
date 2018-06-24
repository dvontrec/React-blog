import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action)
{
	switch(action.type)
	{
		//if the case matches fetch post
		case FETCH_POSTS:
			//used lodash to return an object that contains an array of posts as objects seperated by ID and content
			return _.mapKeys(action.payload.data, 'id');

		default: 
			return state;
	}
}