package com.baohoa.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.baohoa.backend.entity.Gallery;

public interface GalleryRepository extends JpaRepository<Gallery,Long> {
    @Query("SELECT g FROM Gallery g WHERE g.product.id = :productId")
    List<Gallery> findByProductId(Long productId);
    
}
