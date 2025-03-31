package com.LibraryApp.Library.Arrivals;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ArrivalsController{
    private final ArrivalsServiceImpl arrivalsService;

    @Autowired
    public ArrivalsController(ArrivalsServiceImpl arrivalsService) {
        this.arrivalsService = arrivalsService;
    }

    @GetMapping("/arrivals")
    public List<Arrivals> showAll() {
        return arrivalsService.showAllArrivals();
    }
}