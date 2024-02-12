package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Serviceentity;

@Repository
public interface Servicerepo extends JpaRepository<Serviceentity, Long> {
    Serviceentity findByEventname(String eventname);
    void deleteByEventname(String eventname);
    // Other methods...
}
