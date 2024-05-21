package db.lab6.controller;

import db.lab6.dto.RoleDTO;
import db.lab6.entity.Role;
import db.lab6.service.RoleService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/role")
public class RoleController {
    private RoleService roleService;

    @PostMapping("/add")
    public Role addRole(@RequestBody RoleDTO roleDTO) {
        Role role = roleService.addRole(roleDTO);
        return role;
    }

    @GetMapping("/get/{id}")
    public Role getRoleById(@PathVariable Long id) {
        Role role = roleService.getRoleById(id);
        return role;
    }

    @GetMapping("/get/all")
    public List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }

    @PutMapping("/update/{id}")
    public Role updateRole(@PathVariable Long id, @RequestBody RoleDTO roleDTO) {
        Role role = roleService.updateRole(id, roleDTO);
        return role;
    }

    @DeleteMapping("/delete/{id}")
    public String deleteRole(@PathVariable Long id) {
        roleService.deleteRole(id);
        return "Role deleted";
    }
}
