import Role from "./Role";

class User {
    constructor(id, role_id, name, avatar_url, email, phone, create_at, update_at, disable, role) {
        this.id = id;
        this.role_id = role_id;
        this.name = name || null;
        this.avatar_url = avatar_url || null;
        this.email = email;
        this.phone = phone;
        this.create_at = create_at;
        this.update_at = update_at;
        this.disable = disable;
        // Kiểm tra nếu role là object thì tạo instance của Role
        this.role = role ? new Role(role.id, role.role_code, role.role_name, role.create_at, role.update_at, role.disable) : null;
    }
}
export default User;