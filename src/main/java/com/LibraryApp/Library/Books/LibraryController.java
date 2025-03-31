package com.LibraryApp.Library.Books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LibraryController {

    private final BookRepo.Services services;

    @Autowired
    public LibraryController(BookRepo.Services services) {
        this.services = services;
    }

    @GetMapping("/books")
    public List<Book> showAll() {
        return services.showAllBooks();
    }
    @PostMapping("/newBook")
    public void addBook(@RequestBody Book book) {
        services.addNewBook(book);
    }
}
