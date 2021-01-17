import { commonParamValidator } from "../common/validators/commonParamValidator";
import { urlValidator } from "../common/validators/urlValidator";

class ProductViewEvent {

    constructor() {
        this._name = "view:product"
    }

    get name() {
        return this._name;
    }

    validate(param) {
        let isValid = commonParamValidator(param);
        isValid = isValid && (typeof param.productId === "string");
        isValid = isValid && (typeof param.title === "string");
        isValid = isValid && (!("stock" in param) || typeof param.stock === "boolean");
        isValid = isValid && urlValidator(param.url);
        isValid = isValid && (!("mUrl" in param) || urlValidator(param.mUrl));
        isValid = isValid && urlValidator(param.image);
        isValid = isValid && (!("imageXS" in param) || urlValidator(param.imageXS));
        isValid = isValid && (!("imageS" in param) || urlValidator(param.imageS));
        isValid = isValid && (!("imageM" in param) || urlValidator(param.imageM));
        isValid = isValid && (!("imageL" in param) || urlValidator(param.imageL));
        isValid = isValid && (!("imageXL" in param) || urlValidator(param.imageXL));
        isValid = isValid && (typeof param["price"] === "number");
        isValid = isValid && (!("oldPrice" in param) || typeof param["oldPrice"] === "number");
        return isValid;
    }

    apply() {
        
    }

}

export const productViewEvent = new ProductViewEvent();