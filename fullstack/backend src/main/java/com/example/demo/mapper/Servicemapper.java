package com.example.demo.mapper;

import com.example.demo.dto.Servicedto;
import com.example.demo.entity.Serviceentity;

public class Servicemapper {

    public static Servicedto maptoServicedto(Serviceentity serviceentity) {
        // Implement the mapping logic
        return new Servicedto(
                serviceentity.getId(),
                serviceentity.getEventname(),
                serviceentity.getVenue(),
                serviceentity.getCost(),
               
                serviceentity.getDuration()
        );
    }

    public static Serviceentity maptoServiceentity(Servicedto servicedto) {
        // Implement the mapping logic
        return new Serviceentity(
                servicedto.getId(),
                servicedto.getEventname(),
                servicedto.getVenue(),
                servicedto.getCost(),
            
                servicedto.getDuration()
        );
    }
}