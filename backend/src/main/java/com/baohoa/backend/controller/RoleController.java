package com.baohoa.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.baohoa.backend.entity.Role;
import com.baohoa.backend.service.RoleService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/roles")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, exposedHeaders = "Content-Range")

public class RoleController {

    private RoleService roleService;
    @PostMapping
    public ResponseEntity<Role> createRole(@RequestBody Role Role){
        Role saveRole = roleService.createRole(Role);
        return new ResponseEntity<> (saveRole, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<Role> getRoleById(@PathVariable("id") Long RoleId){
        Role Role = roleService.getRoleById(RoleId);
        return new ResponseEntity<>(Role, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Role>> getAllRoles(){
        List<Role> Roles = roleService.getAllRoles();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + Roles.size() + "/" + Roles.size());

        return ResponseEntity.ok().headers(headers).body(Roles);
    }

    @PutMapping("{id}")
    public ResponseEntity<Role> updateRole(@PathVariable("id") Long RoleId, @RequestBody Role Role) {
        Role.setId(RoleId);
        Role updateRole = roleService.updateRole(Role);
        return new ResponseEntity<>(updateRole, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteRole(@PathVariable("id") Long RoleId){
        roleService.deleteRole(RoleId);
        return new ResponseEntity<>("Role successfully deleted!", HttpStatus.OK);
    }
    
}
