package com.baohoa.backend.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.baohoa.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
    public List<Product> findByTitleAndCategoryId(String title, Long category);
    public List<Product> findByTitle(String title);
    public List<Product> findByCategoryId(Long category);
    @Query("SELECT p FROM Product p WHERE p.category.id = :categoryId ORDER BY p.created_at DESC")
    List<Product> findLatestProductsInCategory(Long categoryId, Pageable pageable);
    Page<Product> findProductsByCategoryId(Long categoryId, Pageable pageable);

    @Query("SELECT p FROM Product p WHERE p.sale = 1 ORDER BY p.created_at DESC")
    List<Product> findLatesProductInSale(Integer sale, Pageable pageable);
    Page<Product> findProductsBySale(Integer sale, Pageable pageable);

    @Query("SELECT p FROM Product p ORDER BY p.created_at DESC")
    List<Product> findLatesProductsInCreated(Date created_at, Pageable pageable);
}
