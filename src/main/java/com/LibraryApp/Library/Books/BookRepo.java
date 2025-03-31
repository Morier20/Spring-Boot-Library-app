package com.LibraryApp.Library.Books;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface BookRepo extends JpaRepository<Book, Long> {
    interface Services {
        void addNewBook(Book book);
        public List<Book> showAllBooks();
        void showBookById();
        void deleteBookById();
    }
}
