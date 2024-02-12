package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dto.Servicedto;
import com.example.demo.entity.Serviceentity;
import com.example.demo.mapper.Servicemapper;
import com.example.demo.repo.Servicerepo;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Serviceservice {

    private final Servicerepo serviceRepo;

    public Serviceservice(Servicerepo serviceRepo) {
        this.serviceRepo = serviceRepo;
    }

    public List<Servicedto> getAllServices() {
        List<Serviceentity> services = serviceRepo.findAll();
        return services.stream()
                .map(Servicemapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Servicedto getServiceByName(String eventname) {
        Serviceentity serviceentity = serviceRepo.findByEventname(eventname);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto createService(Servicedto servicedto) {
        Serviceentity serviceentity = Servicemapper.maptoServiceentity(servicedto);
        serviceentity = serviceRepo.save(serviceentity);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto updateServiceByName(String eventname, Servicedto updatedServicedto) {
        Serviceentity existingService = serviceRepo.findByEventname(eventname);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setEventname(updatedServicedto.getEventname());
            existingService.setVenue(updatedServicedto.getVenue());
            existingService.setCost(updatedServicedto.getCost());
          
            existingService.setDuration(updatedServicedto.getDuration());

            existingService = serviceRepo.save(existingService);
            return Servicemapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    public void deleteServiceByName(String eventname) {
        serviceRepo.deleteByEventname(eventname);
    }
}
