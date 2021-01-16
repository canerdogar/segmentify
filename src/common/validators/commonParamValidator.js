import { urlValidator } from "./urlValidator";
import { browserValidator } from "./browserValidator";
import { osValidator } from "./osValidator";
import { languageValidator } from "./languageValidator";
import { deviceValidator } from "./deviceValidator";
import { currencyValidator } from "./currencyValidator";

export function commonParamValidator(param) {
    let isValid = isObject(param);
    isValid = isValid && (param.pageUrl === undefined || urlValidator(param.pageUrl));
    isValid = isValid && (param.referrer === undefined || urlValidator(param.referrer));
    isValid = isValid && (param.userAgent === undefined || typeof userAgent === "string");
    isValid = isValid && (param.browser === undefined || browserValidator(param.browser));
    isValid = isValid && (param.os === undefined || osValidator(param.os));
    isValid = isValid && (param.osversion === undefined || typeof osversion === "string");
    isValid = isValid && (param.params === undefined || isObject(param.params));
    isValid = isValid && (param.currency === undefined || currencyValidator(param.currency));
    isValid = isValid && (param.language === undefined || languageValidator(param.language));
    isValid = isValid && (param.device === undefined || deviceValidator(param.device));
    isValid = isValid && (param.testMode === undefined || typeof param.testMode === "boolean");
    isValid = isValid && (param.nextPage === undefined || typeof param.nextPage === "boolean");
    return isValid;
}