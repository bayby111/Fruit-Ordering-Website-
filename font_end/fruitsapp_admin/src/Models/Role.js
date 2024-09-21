class Role {
    constructor(id, role_code, role_name, create_at, update_at, disable) {
        this.id = id;
        this.role_code = role_code || null;
        this.role_name = role_name || null;
        this.create_at = create_at;
        this.update_at = update_at;
        this.disable = disable;
    }
}

export default Role;