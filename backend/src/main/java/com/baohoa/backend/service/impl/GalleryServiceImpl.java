package com.baohoa.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.baohoa.backend.entity.Gallery;
import com.baohoa.backend.repository.GalleryRepository;
import com.baohoa.backend.service.GalleryService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class GalleryServiceImpl implements GalleryService{
    private GalleryRepository galleryRepository;

    @Override
    public Gallery createGallery(Gallery gallery){
        return galleryRepository.save(gallery);
    }

    @Override
    public Gallery getGalleryById(Long galleryId){
        Optional<Gallery> optionalGallery = galleryRepository.findById(galleryId);
        return optionalGallery.get();
    }
    @Override
    public Page<Gallery> getAllGalleries(Pageable pageable) {
        return galleryRepository.findAll(pageable);
    }

    @Override
    public Gallery updateGallery(Gallery gallery){
        Gallery existingGallery = galleryRepository.findById(gallery.getId()).get();
        existingGallery.setProduct(gallery.getProduct());
        existingGallery.setThumbnail(gallery.getThumbnail());
        Gallery updateGallery = galleryRepository.save(existingGallery);
        return updateGallery;
    }
    @Override
    public void deleteGallery(Long galleryId){
        galleryRepository.deleteById(galleryId);
    }
    @Override
    public List<Gallery> findByProductId(Long productId) {
        return galleryRepository.findByProductId(productId);
    }
}
