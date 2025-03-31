package com.LibraryApp.Library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LibraryApplication {

	public static void main(String[] args) {
		System.out.println(System.getenv("DB_USER"));
		System.out.println(System.getenv("DB_PASSWORD"));
		SpringApplication.run(LibraryApplication.class, args);
	}


}
