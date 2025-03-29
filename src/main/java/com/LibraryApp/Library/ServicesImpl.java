package com.LibraryApp.Library;

import com.LibraryApp.Library.Books.Book;
import com.LibraryApp.Library.Books.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServicesImpl implements Services {
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
