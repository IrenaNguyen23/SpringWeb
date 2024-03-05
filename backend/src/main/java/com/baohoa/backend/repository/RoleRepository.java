package com.baohoa.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baohoa.backend.entity.Role;

public interface RoleRepository extends JpaRepository<Role,Long>{
    
}
