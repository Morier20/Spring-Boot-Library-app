package com.LibraryApp.Library.Books;
import java.util.List;
public interface Services {
    void addNewBook(Book book);
    List <Book> showAllBooks();
    void showBookById();
    void deleteBookById();
}
