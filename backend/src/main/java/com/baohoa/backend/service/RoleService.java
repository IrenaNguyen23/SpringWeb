package com.baohoa.backend.service;

import java.util.List;

import com.baohoa.backend.entity.Role;

public interface RoleService {
    Role createRole(Role role);
    Role getRoleById(Long roleId);
    List<Role> getAllRoles();
    Role updateRole(Role role);
    void deleteRole(Long roleId);
}
