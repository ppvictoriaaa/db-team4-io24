package db.lab6.service;

import db.lab6.dto.GrantDTO;
import db.lab6.entity.Grant;
import db.lab6.repository.GrantRepository;
import db.lab6.repository.PermissionRepository;
import db.lab6.repository.RoleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class GrantService {
    private GrantRepository grantRepository;
    private RoleRepository roleRepository;
    private PermissionRepository permissionRepository;

    public Grant addGrant(GrantDTO grantDTO) {
        Grant grant = new Grant();
        grant.setRole(
                roleRepository.findById(grantDTO.getRoleId()).orElseThrow(() -> new IllegalArgumentException("Role not found"))
        );
        grant.setPermission(
                permissionRepository.findById(grantDTO.getPermissionId()).orElseThrow(() -> new IllegalArgumentException("Permission not found"))
        );
        return grantRepository.save(grant);
    }

    public Grant getGrantById(Long id) {
        return grantRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Grant not found"));
    }

    public List<Grant> getAllGrants() {
        return grantRepository.findAll();
    }

    public void deleteGrant(Long id) {
        grantRepository.deleteById(id);
    }

    public Grant updateGrant(Long id, GrantDTO grantDTO) {
        Grant grant = getGrantById(id);
        grant.setRole(
                roleRepository.findById(grantDTO.getRoleId()).orElseThrow(() -> new IllegalArgumentException("Role not found"))
        );
        grant.setPermission(
                permissionRepository.findById(grantDTO.getPermissionId()).orElseThrow(() -> new IllegalArgumentException("Permission not found"))
        );
        return grantRepository.save(grant);
    };

    public List<Grant> getGrantsByRoleId(Long roleId) {
        return grantRepository.findByRoleId(roleId);
    }

    public List<Grant> getGrantsByPermissionId(Long permissionId) {
        return grantRepository.findByPermissionId(permissionId);
    }
}
