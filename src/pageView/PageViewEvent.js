import { commonParamValidator } from "../common/validators/commonParamValidator";
import { categoryValidator, subCategoryValidator } from "./validator/pageViewValidator";
import { sendEventRequest } from "../common/communicator/Communicator";

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

    apply(param) {
        param.name = "PAGE_VIEW";
        sendEventRequest(param).then((response) => {
            console.log(response);
        });
    }

}

export const pageViewEvent = new PageViewEvent();