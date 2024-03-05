package com.baohoa.backend.service.impl;

import java.util.List;
import java.util.Optional;

import com.baohoa.backend.entity.User;
import com.baohoa.backend.repository.UserRepository;
import com.baohoa.backend.service.UserService;

import lombok.AllArgsConstructor;


import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{
    private UserRepository userRepository;

    @Override
    public User createUser(User user){
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long userId){
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.get();
    }
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(User user){
        User existingUser = userRepository.findById(user.getId()).get();
        existingUser.setAddress(user.getAddress());
        existingUser.setCreated_at(user.getCreated_at());
        existingUser.setDeleted(user.getDeleted());
        existingUser.setEmail(user.getEmail());
        existingUser.setFullname(user.getFullname());
        existingUser.setPassword(user.getPassword());
        existingUser.setPhone_number(user.getPhone_number());
        existingUser.setRole(user.getRole());
        existingUser.setToken(user.getToken());
        existingUser.setUpdated_at(user.getUpdated_at());
        User updateUser = userRepository.save(existingUser);
        return updateUser;
    }
    @Override
    public void deleteUser(Long userId){
        userRepository.deleteById(userId);
    }
    @Override
    public void register(User user){
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("Email already exists");
        }
        // Lưu người dùng vào cơ sở dữ liệu
        userRepository.save(user);
    }
    @Override
    public User authenticateUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
