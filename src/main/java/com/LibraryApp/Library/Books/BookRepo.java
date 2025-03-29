package com.LibraryApp.Library.Books;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BookRepo extends JpaRepository<Book, Long> {
}
