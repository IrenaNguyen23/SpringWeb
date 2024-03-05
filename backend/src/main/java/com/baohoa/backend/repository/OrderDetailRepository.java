package com.baohoa.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baohoa.backend.entity.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail,Long>{
    
}
