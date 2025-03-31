package com.LibraryApp.Library.Books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicesImpl implements BookRepo.Services {
    @Autowired
    BookRepo repo;

    @Override
    public void addNewBook(Book book) {
        repo.save(book);
    }

    @Override
    public List<Book> showAllBooks() {
        return repo.findAll(); // Возвращаем список всех книг
    }
    @Override
    public void showBookById() {

    }

    @Override
    public void deleteBookById() {

    }
}
