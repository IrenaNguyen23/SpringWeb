package com.baohoa.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.baohoa.backend.entity.Product;
import com.baohoa.backend.service.ProductService;

import java.sql.Date;
import java.util.List;
import org.springframework.data.domain.Pageable;

@RestController
@AllArgsConstructor
@RequestMapping("api/products")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
public class ProductController {
    private ProductService productService;
    // Create Product REST API

    @PostMapping

    public ResponseEntity<Product> createProduct(@RequestBody Product Product) {
        Product savedProduct = productService.createProduct(Product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);

    }
    // Get Product by id REST API

    // http://1ocalhost:8080/api/Products/1

    @GetMapping("{id}")

    public ResponseEntity<Product> getProductById(@PathVariable("id") Long ProductId) {
        Product Product = productService.getProductById(ProductId);
        return new ResponseEntity<>(Product, HttpStatus.OK);
    }
    // Get All Products REST API

    // http://1ocalhost:8080/api/Products

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(required = false) Long categoryId) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> products;
        if (categoryId != null) {
            products = productService.getProductsByCategoryId(categoryId, pageable);

        } else {

            products = productService.getAllProducts(pageable);

        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range",
                "items " + pageable.getOffset() + "-" + (pageable.getOffset() + products.getSize()) +
                        "/" + products.getTotalElements());
        return ResponseEntity.ok().headers(headers).body(products.getContent());
    }

    // Update Product REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/Products/1
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long ProductId,
            @RequestBody Product Product) {
        Product.setId(ProductId);
        Product updatedProduct = productService.updateProduct(Product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }
    // Delete Product REST API

    @DeleteMapping("{id}")

    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long ProductId) {
        productService.deleteProduct(ProductId);
        return new ResponseEntity<>("Product successfully deleted!", HttpStatus.OK);
    }

    @GetMapping("/getlatest")
    public ResponseEntity<List<Product>> getProductsNew(
            @RequestParam(name = "categoryid", required = false) Long category,
            @RequestParam(required = false, defaultValue = "4") int pagesize) {
        List<Product> products = productService.getLatestProductsInCategory(category, pagesize);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/getsale")
    public ResponseEntity<List<Product>> getProductsSale(
        @RequestParam(required = false) Integer sale,
        @RequestParam(required = false, defaultValue = "4") int pagesize){
        List<Product> products = productService.getLastProductsInSale(sale,pagesize);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/new")
    public ResponseEntity<List<Product>> getNewProducts(
            @RequestParam(required = false) Date created_at,
            @RequestParam(required = false, defaultValue = "12") int pagesize) {
        List<Product> products = productService.getLatesProductsInCreatedDate(created_at,pagesize);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/allproducts")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

}
