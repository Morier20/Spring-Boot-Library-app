package com.LibraryApp.Library.Arrivals;

import jakarta.persistence.*;

import java.time.LocalDate;
@Entity
@Table(name = "new_arrivals")
public class Arrivals {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "book_id", nullable = false)
    private Long book_id;
    @Column(name = "arrival_date")
    private LocalDate arrival_date;
    @Column(name = "is_active")
    boolean is_active;

    public Arrivals() {

    }

    public Arrivals(Long id, Long book_id, LocalDate arrival_date, boolean is_active) {
        this.id = id;
        this.book_id = book_id;
        this.arrival_date = arrival_date;
        this.is_active = is_active;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getBook_id() {
        return book_id;
    }

    public void setBook_id(Long book_id) {
        this.book_id = book_id;
    }

    public LocalDate getArrival_date() {
        return arrival_date;
    }

    public void setArrival_date(LocalDate arrival_date) {
        this.arrival_date = arrival_date;
    }

    public boolean isIs_active() {
        return is_active;
    }

    public void setIs_active(boolean is_active) {
        this.is_active = is_active;
    }

}
