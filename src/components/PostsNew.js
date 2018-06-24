import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component
{
	renderField(field)
	{
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				{field.meta.error}
			</div>
		);
	}

	render(){
		return(
			<form>
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
		errors.categories = "Enter a categories"
	}

	if(!values.content)
	{	
		//adds the content property to the errors object 
		errors.content = "Enter a content"
	}

	// If there are no errors the form is valid
	return errors
}

export default reduxForm({
	validate, 
	form: 'PostsNewForm'
})(PostNew);