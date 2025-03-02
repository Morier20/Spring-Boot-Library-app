package com.LibraryApp.Library.Books;
import java.time.LocalDate;
public class Book {
    private Long id;
    private String name;
    private String author;
    private Long countAvailable;
    private LocalDate date;

    public Book(Long id, String name, String author, Long countAvailable, LocalDate date) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.countAvailable = countAvailable;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Long getCountAvailable() {
        return countAvailable;
    }

    public void setCountAvailable(Long countAvailable) {
        this.countAvailable = countAvailable;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
