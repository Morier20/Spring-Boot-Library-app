package com.LibraryApp.Library.Arrivals;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArrivalsServiceImpl implements ArrivalsRepo.Services {
    @Autowired
    private ArrivalsRepo repo;

    @Override
    public List<Arrivals> showAllArrivals() {
        return repo.findAll();
    }
}