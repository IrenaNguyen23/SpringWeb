package com.baohoa.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baohoa.backend.entity.User;

public interface UserRepository extends JpaRepository<User,Long>{
    User findByEmail(String email);
    Optional<User> findByEmailAndPassword(String email, String password);
}
