package com.baohoa.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baohoa.backend.entity.Token;

public interface TokenRepository extends JpaRepository<Token,Long>{
    Token findByToken(String token);
}