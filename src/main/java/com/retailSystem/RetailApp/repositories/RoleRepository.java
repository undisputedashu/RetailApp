package com.retailSystem.RetailApp.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.retailSystem.RetailApp.items.Role;

public interface RoleRepository extends MongoRepository<Role, String> {

    Role findByRole(String role);
}