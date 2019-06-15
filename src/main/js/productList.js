import React from 'react';
import Product from './product';
export default class ProductList extends React.Component{
	constructor() {
	    super();
	}
	
	render() {
		const products = this.props.products.map(product =>
			<Product key={product.id} product={product}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Amount</th>
					</tr>
					{products}
				</tbody>
			</table>
		)
	}
}
