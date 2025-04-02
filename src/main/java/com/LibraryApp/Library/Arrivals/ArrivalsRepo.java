package com.LibraryApp.Library.Arrivals;

import com.LibraryApp.Library.Books.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ArrivalsRepo extends JpaRepository<Arrivals, Long> {
    interface Services {
        public List<Arrivals> showAllArrivals();
    }
}
