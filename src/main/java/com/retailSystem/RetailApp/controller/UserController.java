package com.retailSystem.RetailApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.retailSystem.RetailApp.items.User;
import com.retailSystem.RetailApp.service.RetailUserDetailsService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private RetailUserDetailsService retailUserDetailsService;
	
	@PostMapping
	public ResponseEntity<?> addorUpdateUser(@RequestBody User user) {
		retailUserDetailsService.saveUser(user);
		return new ResponseEntity("User added succcessfully", HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity<?> getAll() {
		return new ResponseEntity(retailUserDetailsService.findAll(), HttpStatus.OK);
	}

	@DeleteMapping
	public ResponseEntity<?> deleteUser(@RequestParam("id") String id) {
		retailUserDetailsService.deleteProduct(id);
		return new ResponseEntity("User deleted succcessfully", HttpStatus.OK);
	}

}
