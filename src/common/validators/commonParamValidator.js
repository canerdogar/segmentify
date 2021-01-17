import { urlValidator } from "./urlValidator";
import { browserValidator } from "./browserValidator";
import { osValidator } from "./osValidator";
import { languageValidator } from "./languageValidator";
import { deviceValidator } from "./deviceValidator";
import { currencyValidator } from "./currencyValidator";
import { isObject } from "../util/isObject";

export function commonParamValidator(param) {
    let isValid = isObject(param);
    isValid = isValid && (!("pageUrl" in param) || urlValidator(param.pageUrl, "pageUrl"));
    isValid = isValid && (!("referrer" in param) || urlValidator(param.referrer, "referrer"));
    isValid = isValid && (!("userAgent" in param) || typeof userAgent === "string");
    isValid = isValid && (!("browser" in param) || browserValidator(param.browser));
    isValid = isValid && (!("os" in param) || osValidator(param.os));
    isValid = isValid && (!("osversion" in param) || typeof osversion === "string");
    isValid = isValid && (!("params" in param) || isObject(param.params));
    isValid = isValid && (!("currency" in param) || currencyValidator(param.currency));
    isValid = isValid && (!("language" in param) || languageValidator(param.language));
    isValid = isValid && (!("device" in param) || deviceValidator(param.device));
    isValid = isValid && (!("testMode" in param) || typeof param.testMode === "boolean");
    isValid = isValid && (!("nextPage" in param) || typeof param.nextPage === "boolean");
    return isValid;
}