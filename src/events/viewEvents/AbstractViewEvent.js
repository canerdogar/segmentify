import { getUserAgent } from "../../common/util/userAgentUtil";
import { getOS } from "../../common/util/osUtil";
import { getBrowser } from "../../common/util/browserUtil";
import { sendEventRequest } from "../../common/communicator/Communicator";
import { render } from "../../common/mustacheRenderer";

export class AbstractViewEvent {

    constructor(responseName) {
        this.responseName = responseName;
    }

    apply(param) {
        param.name = this.responseName;
        !("userAgent" in param) && (param["userAgent"] = getUserAgent());
        !("os" in param) && (param["os"] = getOS());
        !("browser" in param) && (param["browser"] = getBrowser());
        sendEventRequest(param).then((response) => {
            render(
                response.responses?.[0]?.[0]?.params?.recommendationTemplate, 
                response.responses?.[0]?.[0]?.params?.recommendedProducts,
                response.responses?.[0]?.[0]?.params?.selector
                );
        });
    }

}