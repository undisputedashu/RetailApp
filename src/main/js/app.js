import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
const ReactDOM = require('react-dom');
import ProductList from './productList';
import Product from './product';

export default class App extends React.Component { 
	
	constructor() {
	    super();
	    this.state = {products: []};
	}

	componentDidMount() {
		this.fetchProducts();
	}
	
	render() {
		return  (
				<div className='center'><h2>Online Retail Products within Budget</h2>
			<ProductList products={this.state.products} fetch={this.fetchProducts}/></div>
		);
	}
	
	 fetchProducts() {
		try {
		       let self = this;
		       axios({
		            url: 'http://127.0.0.1:8080/product',
		            method: 'get',
		            timeout: 8000,
		            headers: {
		                'Content-Type': 'application/json'
		            }
		        }).then(function (response) {
		        	 self.setState({
		        		 products : response.data
				        });
		        });
		    }
		    catch (err) {
		        console.error(err);
		    }
	}
}

ReactDOM.render(
		<App />,
		document.getElementById('react')
	)
