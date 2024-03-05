package com.baohoa.backend.service;

import java.sql.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.baohoa.backend.entity.Product;


public interface ProductService {
    
    public Product createProduct(Product product);
    public Product getProductById(Long productId);
    public Page<Product> getAllProducts(Pageable pageable);
    List<Product> getAllProducts();
    public Product updateProduct(Product product);
    public void deleteProduct(Long productId);
    public List<Product> getProductsByCondition(String title, Long category);
    public List<Product> getLatestProductsInCategory(Long categoryId, int pageSize);
    public Page<Product> getProductsByCategoryId(Long categoryId, Pageable pageable);
    public List<Product> getLastProductsInSale(Integer sale, int pageSize);
    public Page<Product> getProductsBySale(Integer sale, Pageable pageable);
    public List<Product> getLatesProductsInCreatedDate(Date created_at, int pageSize);
}

