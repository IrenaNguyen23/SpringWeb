package com.baohoa.backend.service;

import java.util.List;

import com.baohoa.backend.entity.Category;

public interface CategoryService {
    
    public Category createCategory(Category category);
    public Category getCategoryById(Long categoryId);
    public List<Category> getAllCategories();
    public Category updateCategory(Category category);
    public void deleteCategory(Long categoryId);
}
