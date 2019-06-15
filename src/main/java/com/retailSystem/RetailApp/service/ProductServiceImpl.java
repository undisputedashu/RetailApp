package com.retailSystem.RetailApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.retailSystem.RetailApp.items.Product;
import com.retailSystem.RetailApp.repositories.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public List<Product> findAll() {
		return productRepository.findAll();
	}

	@Override
	public void saveOrUpdateProduct(Product product) {
		productRepository.save(product);
	}

	@Override
	public void deleteProduct(String id) {
		productRepository.deleteById(id);
	}

}
