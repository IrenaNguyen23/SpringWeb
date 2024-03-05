
package com.baohoa.backend.service.impl;

import java.util.List;
import java.util.Optional;
import java.sql.Date;

import java.util.ArrayList;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.baohoa.backend.entity.Product;
import com.baohoa.backend.repository.ProductRepository;
import com.baohoa.backend.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;

    @Override
    public List<Product> getLatesProductsInCreatedDate(Date created_at, int pageSize) {
        PageRequest pageRequest = PageRequest.of(0, pageSize, Sort.by(Sort.Direction.DESC, "created_at"));
        return productRepository.findLatesProductsInCreated(created_at, pageRequest);
    }

    public List<Product> getLastProductsInSale(Integer sale, int pageSize) {
        PageRequest pageRequest = PageRequest.of(0, pageSize, Sort.by(Sort.Direction.DESC, "created_at"));
        return productRepository.findLatesProductInSale(sale, pageRequest);
    }

    public Page<Product> getProductsBySale(Integer sale, Pageable pageable) {
        return productRepository.findProductsBySale(sale, pageable);
    }


    public Page<Product> getProductsByCategoryId(Long categoryId, Pageable pageable) {
        return productRepository.findProductsByCategoryId(categoryId, pageable);
    }

    public List<Product> getProductsByCondition(String title, Long category) {
        if (title != null && category != null) {
            return productRepository.findByTitleAndCategoryId(title, category);
        } else if (title != null) {
            return productRepository.findByTitle(title);
        } else if (category != null) {
            return productRepository.findByCategoryId(category);
        } else {
            return new ArrayList<>();
        }
    }

    public List<Product> getLatestProductsInCategory(Long categoryId, int pageSize) {
        PageRequest pageRequest = PageRequest.of(0, pageSize, Sort.by(Sort.Direction.DESC, "created_at"));
        return productRepository.findLatestProductsInCategory(categoryId, pageRequest);
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        return optionalProduct.get();
    }

    @Override
    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public Product updateProduct(Product product) {
        Product existingProduct = productRepository.findById(product.getId()).get();
        existingProduct.setTitle(product.getTitle());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setBrand(product.getBrand());
        existingProduct.setDiscount(product.getDiscount());
        existingProduct.setSale(product.getSale());
        existingProduct.setThumbnail(product.getThumbnail());
        existingProduct.setCreated_at(product.getCreated_at());
        existingProduct.setUpdated_at(product.getUpdated_at());
        existingProduct.setDeleted(product.getDeleted());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setCategory(product.getCategory());
        existingProduct.setGallery(product.getGallery());
        existingProduct.setOrderdetail(product.getOrderdetail());

        Product updateProduct = productRepository.save(existingProduct);
        return updateProduct;
    }

    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }
    
    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
