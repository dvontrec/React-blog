import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise'
import './index.css';

import PostIndex from './components/PostIndex'
import PostNew from './components/PostsNew'
import PostShow from './components/PostShow'
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={ createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/posts/new" component={PostNew} />
					<Route path="/posts/show" component={PostShow} />
					<Route path="/" component={PostIndex} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.container'));
registerServiceWorker();