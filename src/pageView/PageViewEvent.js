import { commonParamValidator } from "../common/validators/commonParamValidator";

class PageViewEvent {

    constructor() {
        this._name = "view:page"
    }

    get name() {
        return this._name;
    }

    validate(param) {
        let isValid = commonParamValidator(param);
        return isValid;
    }

    apply() {
        
    }

}

export const pageViewEvent = new PageViewEvent();