import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

export default class Product extends React.Component{
	
	constructor() {
	    super();
	}
	
	render() {
		var self = this;
		return (
			<tr>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.description}</td>
				<td>{this.props.product.amount}</td>
				<td><Button onClick={() => self.handleClick(this.props.product.id)}>Delete</Button></td>
			</tr>
		);
	}
	
	handleClick(id) {
		let self = this;
		try {
			axios({
	            url: 'http://127.0.0.1:8080/product/delete',
	            method: 'delete',
	            params: {
	                id: id
	            },
	            headers: {
	                'Content-Type': 'application/json'
	            }
	        }).then(function (response) {
	        	 alert("Successfully deleted!!");
	        	 self.props.fetch();
	        }).catch(function (error) {
	        	alert("Unauthorized operation!!");
	          });
		} catch(e) {
			console.log(e);
		}
	}
}
