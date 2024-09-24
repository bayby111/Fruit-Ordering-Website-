
export class Product {
    constructor(id, code, title, image, description, quantity, origin_id, status, create_at, update_at) {
        this.id = id;
        this.code = code;
        this.title = title;
        this.image = image;
        this.description = description;
        this.quantity = quantity;
        this.origin_id = origin_id;
        this.status = status;
        this.create_at = create_at;
        this.update_at = update_at
    }
}