import { commonParamValidator } from "../../../common/validators/commonParamValidator";
import { typeChecker } from "../../../common/validators/typeChecker";
import { paramChecker } from "../../../common/validators/paramChecker";

import { AbstractViewEvent } from "../AbstractViewEvent";

class PageViewEvent extends AbstractViewEvent {

    constructor() {
        super("PAGE_VIEW");
        this._name = "view:page"
    }

    get name() {
        return this._name;
    }

    validate(param) {
        let isValid = commonParamValidator(param);
        isValid = isValid && paramChecker(param, "category", [typeChecker("string")], false);
        isValid = isValid && paramChecker(param, "subCategory", [typeChecker("string")]);
        return isValid;
    }

}

export const pageViewEvent = new PageViewEvent();