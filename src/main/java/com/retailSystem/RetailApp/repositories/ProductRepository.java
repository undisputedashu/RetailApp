package com.retailSystem.RetailApp.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.retailSystem.RetailApp.items.Product;


public interface ProductRepository extends MongoRepository<Product, String>{

}
