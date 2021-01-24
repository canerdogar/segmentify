import { commonParamValidator } from "../../../common/validators/commonParamValidator";
import { urlValidator } from "../../../common/validators/urlValidator";
import { arrayValidator } from "../../../common/validators/arrayValidator";
import { typeChecker } from "../../../common/validators/typeChecker";
import { paramChecker } from "../../../common/validators/paramChecker";

import { AbstractViewEvent } from "../AbstractViewEvent";

class ProductViewEvent extends AbstractViewEvent {

    constructor() {
        super("PRODUCT_VIEW");
        this._name = "view:product"
    }

    get name() {
        return this._name;
    }

    validate(param) {
        let isValid = commonParamValidator(param);
        isValid = isValid && paramChecker(param, "productId", [typeChecker("string")], false);
        isValid = isValid && paramChecker(param, "title", [typeChecker("string")], false);
        isValid = isValid && paramChecker(param, "stock", [typeChecker("boolean")]);
        isValid = isValid && paramChecker(param, "url", [urlValidator], false);
        isValid = isValid && paramChecker(param, "mUrl", [urlValidator]);
        isValid = isValid && paramChecker(param, "image", [urlValidator], false);
        isValid = isValid && paramChecker(param, "imageXS", [urlValidator]);
        isValid = isValid && paramChecker(param, "imageS", [urlValidator]);
        isValid = isValid && paramChecker(param, "imageM", [urlValidator]);
        isValid = isValid && paramChecker(param, "imageL", [urlValidator]);
        isValid = isValid && paramChecker(param, "imageXL", [urlValidator]);
        isValid = isValid && paramChecker(param, "category", [typeChecker("string")], false);
        isValid = isValid && paramChecker(param, "brand", [typeChecker("string")]);
        isValid = isValid && paramChecker(param, "price", [typeChecker("number")], false);
        isValid = isValid && paramChecker(param, "oldPrice", [typeChecker("number")]);
        isValid = isValid && paramChecker(param, "gender", [typeChecker("string")]);
        isValid = isValid && paramChecker(param, "colors", [arrayValidator]);
        isValid = isValid && paramChecker(param, "sizes", [arrayValidator]);
        isValid = isValid && paramChecker(param, "labels", [arrayValidator]);
        return isValid;
    }

}

export const productViewEvent = new ProductViewEvent();