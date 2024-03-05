package com.baohoa.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baohoa.backend.entity.Orders;

public interface OrdersRepository extends JpaRepository<Orders,Long>{
    
}
