package com.LibraryApp.Library.Books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LibraryController {

    private final Services services;  // инжекция зависимости

    @Autowired
    public LibraryController(Services services) {
        this.services = services;
    }

    // Получаем список всех книг
    @GetMapping("/books")
    public List<Book> showAll() {
        return services.showAllBooks();
    }

    // Добавляем новую книгу
    @PostMapping("/newBook")
    public void addBook(@RequestBody Book book) {
        services.addNewBook(book);
    }
}
