package com.example.demo.service;


import com.example.demo.entity.Contact;
import com.example.demo.dto.ContactDto;
import com.example.demo.mapper.Contactmapper;
import com.example.demo.repo.Contactrepo;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final Contactrepo contactRepository;

    public ContactService(Contactrepo contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactDto createContact(ContactDto contactDto) {
        Contact contact = Contactmapper.toEntity(contactDto);
        contact = contactRepository.save(contact);
        return Contactmapper.toDto(contact);
    }

    // If you need to implement other service methods, you can add them here

}

