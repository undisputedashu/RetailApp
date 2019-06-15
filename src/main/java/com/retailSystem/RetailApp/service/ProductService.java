package com.retailSystem.RetailApp.service;

import java.util.List;

import com.retailSystem.RetailApp.items.Product;

public interface ProductService {

	List<Product> findAll();
	
	void saveOrUpdateProduct(Product product);
	
	void deleteProduct(String id);

}
