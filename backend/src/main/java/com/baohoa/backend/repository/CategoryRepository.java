package com.baohoa.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.baohoa.backend.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}

