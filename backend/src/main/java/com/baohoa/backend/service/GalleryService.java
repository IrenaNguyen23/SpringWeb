package com.baohoa.backend.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.baohoa.backend.entity.Gallery;

public interface GalleryService {
    public Gallery createGallery(Gallery gallery);
    public Gallery getGalleryById(Long galleryId);
    public Page<Gallery> getAllGalleries(Pageable page);
    public Gallery updateGallery(Gallery gallery);
    public void deleteGallery(Long galleryId);
    public List<Gallery> findByProductId(Long productId);

}
