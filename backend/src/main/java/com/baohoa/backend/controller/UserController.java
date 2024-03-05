package com.baohoa.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.baohoa.backend.entity.User;
import com.baohoa.backend.repository.UserRepository;
import com.baohoa.backend.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@AllArgsConstructor
@RequestMapping("api/users")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, exposedHeaders = "Content-Range")

public class UserController {

    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User User){
        User saveUser = userService.createUser(User);
        return new ResponseEntity<> (saveUser, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long UserId){
        User User = userService.getUserById(UserId);
        return new ResponseEntity<>(User, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getAllUsers();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + users.size() + "/" + users.size());

        return ResponseEntity.ok().headers(headers).body(users);
    }

    @PutMapping("{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long UserId, @RequestBody User User) {
        User.setId(UserId);
        User updateUser = userService.updateUser(User);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long UserId){
        userService.deleteUser(UserId);
        return new ResponseEntity<>("User successfully deleted!", HttpStatus.OK);
    }
    @PostMapping("/register")
    public void register(@RequestBody User user) {
        userService.register(user);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user,HttpSession session) {
        try {
            // Thực hiện băm mật khẩu và thêm muối
            Optional<User> existingUser = userRepository.findByEmailAndPassword(user.getEmail(),user.getPassword());

            if (existingUser.isPresent()) {
                // Tạo và trả về một JWT khi đăng nhập thành công
                session.setAttribute("user", existingUser.get());
                return ResponseEntity.ok(existingUser.get());
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Đăng nhập thất bại");
            }
        } catch (Exception e) {
            // Xử lý ngoại lệ và trả về thông báo lỗi phù hợp
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Lỗi trong quá trình đăng nhập");
        }
    }

    @GetMapping("/getSessionInfo")
    public ResponseEntity<?> getSessionInfo(HttpSession session) {
        try {
            // Kiểm tra xem người dùng đã đăng nhập hay chưa
            User loggedInUser = (User) session.getAttribute("user");

            if (loggedInUser != null) {
                // Trả về thông tin người dùng nếu đã đăng nhập
                return ResponseEntity.ok(loggedInUser);
            } else {
                // Trả về mã lỗi nếu người dùng chưa đăng nhập
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Người dùng chưa đăng nhập");
            }
        } catch (Exception e) {
            // Xử lý ngoại lệ và trả về thông báo lỗi phù hợp
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Lỗi trong quá trình kiểm tra session");
        }
    }
    @PostMapping("/logout")
        public ResponseEntity<?> logout(HttpServletRequest request) {
        try {
            // Thực hiện logic đăng xuất tùy chỉnh ở đây (ví dụ: hủy phiên)
            request.getSession().invalidate();
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            // Xử lý ngoại lệ và trả về thông báo lỗi phù hợp
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Lỗi trong quá trình đăng xuất");
        }
    }
}