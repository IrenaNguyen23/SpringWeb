package com.baohoa.backend.service.impl;

import java.util.List;
import java.util.Optional;

import com.baohoa.backend.entity.Role;
import com.baohoa.backend.repository.RoleRepository;
import com.baohoa.backend.service.RoleService;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RoleServiceImpl implements RoleService {
    private RoleRepository roleRepository;

    @Override
    public Role createRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public Role getRoleById(Long roleId) {
        Optional<Role> optionalRole = roleRepository.findById(roleId);
        return optionalRole.get();
    }

    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Role updateRole(Role role) {
        Role existingRole = roleRepository.findById(role.getId()).get();
        existingRole.setName(role.getName());
        Role updateRole = roleRepository.save(existingRole);
        return updateRole;
    }

    @Override
    public void deleteRole(Long roleId) {
        roleRepository.deleteById(roleId);
    }
}
