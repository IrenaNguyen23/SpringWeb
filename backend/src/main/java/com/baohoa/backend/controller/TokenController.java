package com.baohoa.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.baohoa.backend.entity.Token;
import com.baohoa.backend.service.TokenService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/tokens")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, exposedHeaders = "Content-Range")

public class TokenController {

    private TokenService tokenService;
    @PostMapping
    public ResponseEntity<Token> createToken(@RequestBody Token Token){
        Token saveToken = tokenService.createToken(Token);
        return new ResponseEntity<> (saveToken, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<Token> getTokenById(@PathVariable("id") Long TokenId){
        Token Token = tokenService.getTokenById(TokenId);
        return new ResponseEntity<>(Token, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Token>> getAllTokens(){
        List<Token> Tokens = tokenService.getAllTokens();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + Tokens.size() + "/" + Tokens.size());
        
        return ResponseEntity.ok().headers(headers).body(Tokens);
    }

    @PutMapping("{id}")
    public ResponseEntity<Token> updateToken(@PathVariable("id") Long TokenId, @RequestBody Token Token) {
        Token.setId(TokenId);
        Token updateToken = tokenService.updateToken(Token);
        return new ResponseEntity<>(updateToken, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteToken(@PathVariable("id") Long TokenId){
        tokenService.deleteToken(TokenId);
        return new ResponseEntity<>("Token successfully deleted!", HttpStatus.OK);
    }
    
}