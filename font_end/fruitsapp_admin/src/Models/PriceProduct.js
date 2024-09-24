
class PriceProduct {
    constructor(id, product_id, price, currency, description, create_at, update_at) {
        this.id = id;
        this.product_id = product_id;
        this.price = price;
        this.currency = currency;
        this.description = description;
        this.create_at = create_at;
        this.update_at = update_at; 
    }
}

export default PriceProduct;