package db.lab6.controller;

import db.lab6.dto.PermissionDTO;
import db.lab6.entity.Permission;
import db.lab6.service.PermissionService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/permission")
public class PermissionController {
    private PermissionService permissionService;

    @PostMapping("/add")
    public Permission addRole(@RequestBody PermissionDTO permissionDTO) {
        Permission permission = permissionService.addPermission(permissionDTO);
        return permission;
    }

    @GetMapping("/get/{id}")
    public Permission getRoleById(@PathVariable Long id) {
        Permission permission = permissionService.getPermissionById(id);
        return permission;
    }

    @GetMapping("/get/all")
    public List<Permission> getAllPermissions() {
        return permissionService.getAllPermissions();
    }

    @PutMapping("/update/{id}")
    public Permission updateRole(@PathVariable Long id, @RequestBody PermissionDTO permissionDTO) {
        Permission permission = permissionService.updatePermission(id, permissionDTO);
        return permission;
    }

    @DeleteMapping("/delete/{id}")
    public String deleteRole(@PathVariable Long id) {
        permissionService.deletePermission(id);
        return "Permission deleted";
    }

}
