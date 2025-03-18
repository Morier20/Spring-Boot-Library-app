package com.LibraryApp.Library.Books;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServicesImpl implements Services {
    private List<Book> booksList = new ArrayList<>();

    @Override
    public void addNewBook(Book book) {
        booksList.add(book);
    }

    @Override
    public List<Book> showAllBooks() {
        return booksList;
    }

    @Override
    public void showBookById() {

    }

    @Override
    public void deleteBookById() {

    }
}
