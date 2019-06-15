package com.retailSystem.RetailApp.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.retailSystem.RetailApp.items.User;

public interface UserRepository extends MongoRepository<User, String> {

    User findByEmail(String email);

}