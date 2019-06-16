import React from 'react';
import Product from './product';
export default class ProductList extends React.Component{
	constructor() {
	    super();
	}
	
	render() {
		var self = this;
		const products = this.props.products.map(product =>
			<Product key={product.id} product={product} fetch={self.props.fetch}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Amount</th>
						<th>Delete</th>
					</tr>
					{products}
				</tbody>
			</table>
		)
	}
}
