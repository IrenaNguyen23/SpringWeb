package com.baohoa.backend.service;

import java.util.List;
import com.baohoa.backend.entity.User;
public interface UserService {
    public User createUser(User user);
    public User getUserById(Long userId);
    List<User> getAllUsers();
    User updateUser(User user);
    void deleteUser(Long userId);
    public void register(User user);
    User authenticateUser(String email, String password);
}
