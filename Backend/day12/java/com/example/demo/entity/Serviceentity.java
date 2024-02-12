package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "eventbook")
public class Serviceentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "eventname",nullable = false)
    private String eventname;

    @Column(name = "venue",nullable = false)
    private String venue;

    @Column(name = "cost",nullable = false)
    private String cost;

    @Column(name = "duration",nullable = false)
    private String duration;

}