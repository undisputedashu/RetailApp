import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
const ReactDOM = require('react-dom');
import ProductList from './productList';
import Product from './product';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class App extends React.Component { 
	
	constructor() {
	    super();
	    this.state = {
	    		products: [],
	    		showAddModal: false
	    		};
	}

	componentDidMount() {
		this.fetchProducts();
	}
	
	render() {
		var self = this;
		return  (
				<div className='center'>
				<h2>Online Retail Products within Budget</h2>
				<AddModal showAddModal={self.state.showAddModal} fetch={self.fetchProducts} me={this}/>
			<ProductList products={this.state.products} fetch={this.fetchProducts} me={this}/></div>
		);
	}
	
	 fetchProducts() {
		try {
		       var self = this;
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

class AddModal extends React.Component {
	  constructor(props, context) {
	    super(props, context);
	    this.props = props;
	    
	    this.handleShow = this.handleShow.bind(this);
	    this.handleClose = this.handleClose.bind(this);
	    this.addProduct = this.addProduct.bind(this);
	    var self = this;
	    this.state = {
	      show: self.props.showAddModal,
	    };
	  }

	  handleClose() {
	    this.setState({ show: false });
	  }

	  handleShow() {
	    this.setState({ show: true });
	  }

	  render() {
	    return (
	      <>
	        <Button variant="primary" onClick={this.handleShow}>
	          Add product
	        </Button>

	        <Modal show={this.state.show} onHide={this.handleClose}>
	          <Modal.Header>
	            <Modal.Title>Provide product details</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	          <Form>
	          <Form.Group controlId="formName">
	            <Form.Label>Name</Form.Label>
	            <Form.Control type="textarea" placeholder="Product name" />
	          </Form.Group>

	          <Form.Group controlId="formDescription">
	            <Form.Label>Description</Form.Label>
	            <Form.Control type="textarea" placeholder="Description" />
	          </Form.Group>
	            
	            <Form.Group controlId="formPrice">
	            <Form.Label>Price</Form.Label>
	            <Form.Control type="textarea" placeholder="Price" />
	          </Form.Group>
	            
	            <Button variant="secondary" onClick={this.handleClose}>
	              CANCEL
	            </Button>
	            <Button variant="primary" onClick={this.addProduct}>
	              ADD
	            </Button>
	        </Form>
	          </Modal.Body>
	        </Modal>
	      </>
	    );
	 }
	  
	  addProduct(e) {
		  var name = e.target.form.elements.formName.value;
		  var description = e.target.form.elements.formDescription.value;
		  var amount = e.target.form.elements.formPrice.value;
		  var self = this;
			try {
				axios({
		            url: 'http://127.0.0.1:8080/product/add',
		            method: 'post',
		            data: {
		            	"name":name,
		                "description": description,
		                "amount": amount
		            },
		            headers: {
		                'Content-Type': 'application/json'
		            }
		        }).then(function (response) {
		        	 alert("Successfully added!!");
		        	 self.props.me.fetchProducts();
		        	 self.handleClose();
		        }).catch(function (error) {
		        	alert("Unauthorized operation!!");
		          });
			} catch(e) {
				console.log(e);
			}
	  }
}

ReactDOM.render(
		<App />,
		document.getElementById('react')
	)
