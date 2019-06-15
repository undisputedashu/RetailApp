package com.retailSystem.RetailApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.retailSystem.RetailApp.items.Product;
import com.retailSystem.RetailApp.service.ProductService;


//@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("/product")
public class RetailSystemController {

	@Autowired
	private ProductService productService;
	
	@GetMapping
	public ResponseEntity<?> getAll() {
		return new ResponseEntity(productService.findAll(), HttpStatus.OK);
	}
	
	@PostMapping
	@RequestMapping("/add")
	public ResponseEntity<?> addorUpdateProduct(@RequestBody Product product) {
		productService.saveOrUpdateProduct(product);
		return new ResponseEntity("Product added succcessfully", HttpStatus.OK);
	}

	@DeleteMapping
	@RequestMapping("/delete")
	public ResponseEntity<?> deleteProduct(@RequestParam("id") String id) {
		productService.deleteProduct(id);
		return new ResponseEntity("Product deleted succcessfully", HttpStatus.OK);
	}

}
