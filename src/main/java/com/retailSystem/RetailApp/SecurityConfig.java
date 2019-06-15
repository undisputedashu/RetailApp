package com.retailSystem.RetailApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.retailSystem.RetailApp.service.RetailUserDetailsService;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private RetailUserDetailsService userDetailsService;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http.csrf()
			.disable()
			.authorizeRequests()
			.antMatchers("/product/delete").hasAuthority("ADMIN")
			.antMatchers("/product/add").hasAuthority("ADMIN")
			.anyRequest()
			.authenticated()
			.and()
			.httpBasic();
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
	    web.ignoring().antMatchers("/user");
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	public void configure(AuthenticationManagerBuilder builder) throws Exception {
		builder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
		
		builder.inMemoryAuthentication()
	      .withUser("ashutosh@gmail.com").password("p@55word")
	      .authorities("ADMIN");
	}
}