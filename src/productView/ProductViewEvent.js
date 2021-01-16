class ProductViewEvent {

    constructor() {
        this._name = "view:product"
    }

    get name() {
        return this._name;
    }

    validate(param) {
        return typeof param === "string";
    }

    apply() {
        
    }

}

export const productViewEvent = new ProductViewEvent();