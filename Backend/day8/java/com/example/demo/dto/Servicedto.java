package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Servicedto {
    private Long id;
    private String eventname;
    private String venue;
    private String cost;
 
    private String Duration;

}