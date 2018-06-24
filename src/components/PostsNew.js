import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { createPost } from '../actions';

class PostNew extends Component
{
	renderField(field)
	{
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger': ''}`
		return (
			<div className={ className }>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values){
		this.props.createPost(values, () => 
		{
			//when the form is submitted navigate the user to the root route
			this.props.history.push('/')
		});
	}

	render(){

		const { handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
				<Field 
					label="Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values)
{
	const errors = {};

	// Validates the input values
	//if the value is empty
	if(!values.title)
	{	
		//adds the title property to the errors object 
		errors.title = "Enter a title"
	}

	if(!values.categories)
	{	
		//adds the categories property to the errors object 
		errors.categories = "Enter a category"
	}

	if(!values.content)
	{	
		//adds the content property to the errors object 
		errors.content = "Enter some content"
	}

	// If there are no errors the form is valid
	return errors
}

export default reduxForm({
	validate, 
	form: 'PostsNewForm'
})(
	connect (null, { createPost })(PostNew)
);