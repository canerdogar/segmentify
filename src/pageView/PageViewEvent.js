import { commonParamValidator } from "../common/validators/commonParamValidator";
import { categoryValidator, subCategoryValidator } from "./validator/pageViewValidator";
import { sendEventRequest } from "../common/communicator/Communicator";
import { render } from "../common/RecommendedTemplateRenderer";

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
            render(
                response.responses?.[0]?.[0]?.params?.recommendationTemplate, 
                response.responses?.[0]?.[0]?.params?.recommendedProducts,
                response.responses?.[0]?.[0]?.params?.selector
                );
        });
    }

}

export const pageViewEvent = new PageViewEvent();