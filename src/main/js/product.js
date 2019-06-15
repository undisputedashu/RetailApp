import React from 'react';
export default class Product extends React.Component{
	
	constructor() {
	    super();
	}
	
	render() {
		return (
			<tr>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.description}</td>
				<td>{this.props.product.amount}</td>
			</tr>
		)
	}
}
