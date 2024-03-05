package com.baohoa.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.baohoa.backend.entity.Gallery;
import com.baohoa.backend.service.GalleryService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/galleries")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, exposedHeaders = "Content-Range")

public class GalleryController {

    private GalleryService galleryService;
    @PostMapping
    public ResponseEntity<Gallery> createGallery(@RequestBody Gallery Gallery){
        Gallery saveGallery = galleryService.createGallery(Gallery);
        return new ResponseEntity<> (saveGallery, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<Gallery> getGalleryById(@PathVariable("id") Long GalleryId){
        Gallery Gallery = galleryService.getGalleryById(GalleryId);
        return new ResponseEntity<>(Gallery, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Gallery>> getAllGalleries(
        @RequestParam(defaultValue = "0") Integer page,
        @RequestParam(defaultValue = "10") Integer size) {
    Pageable pageable = PageRequest.of(page, size);
    Page<Gallery> Galleries;

        Galleries = galleryService.getAllGalleries(pageable);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range",
                "items " + pageable.getOffset() + "-" + (pageable.getOffset() + Galleries.getSize()) +
                        "/" + Galleries.getTotalElements());
        return ResponseEntity.ok().headers(headers).body(Galleries.getContent());
        }

    @PutMapping("{id}")
    public ResponseEntity<Gallery> updateGallery(@PathVariable("id") Long GalleryId, @RequestBody Gallery Gallery) {
        Gallery.setId(GalleryId);
        Gallery updateGallery = galleryService.updateGallery(Gallery);
        return new ResponseEntity<>(updateGallery, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteGallery(@PathVariable("id") Long GalleryId){
        galleryService.deleteGallery(GalleryId);
        return new ResponseEntity<>("Gallery successfully deleted!", HttpStatus.OK);
    }

    @GetMapping("/product/{productId}")
    public List<Gallery> getGalleriesByProductId(@PathVariable Long productId) {
        return galleryService.findByProductId(productId);
    }
    
}