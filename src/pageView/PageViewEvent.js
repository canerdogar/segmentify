import { commonParamValidator } from "../common/validators/commonParamValidator";
import { categoryValidator, subCategoryValidator } from "./validator/pageViewValidator";

class PageViewEvent {

    constructor() {
        this._name = "view:page"
    }

    get name() {
        return this._name;
    }

    validate(param) {
        let isValid = commonParamValidator(param);
        isValid = isValid && categoryValidator(param);
        isValid = isValid && subCategoryValidator(param);
        return isValid;
    }

    apply() {
        
    }

}

export const pageViewEvent = new PageViewEvent();