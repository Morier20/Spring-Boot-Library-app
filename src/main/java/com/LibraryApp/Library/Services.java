package com.LibraryApp.Library;
import com.LibraryApp.Library.Books.Book;

import java.util.List;
public interface Services {
    void addNewBook(Book book);
    public List<Book> showAllBooks();
    void showBookById();
    void deleteBookById();
}
