import { urlValidator } from "./urlValidator";
import { browserValidator } from "./browserValidator";
import { osValidator } from "./osValidator";
import { languageValidator } from "./languageValidator";
import { deviceValidator } from "./deviceValidator";
import { currencyValidator } from "./currencyValidator";
import { isObject } from "../util/isObject";

import { paramChecker } from "./paramChecker";
import { typeChecker } from "./typeChecker";

export function commonParamValidator(param) {
    let isValid = isObject(param);
    isValid = isValid && paramChecker(param, "pageUrl", [urlValidator],);
    isValid = isValid && paramChecker(param, "referrer", [urlValidator])
    isValid = isValid && paramChecker(param, "userAgent", [typeChecker("string")]);
    isValid = isValid && paramChecker(param, "browser", [browserValidator]);
    isValid = isValid && paramChecker(param, "os", [osValidator]);
    isValid = isValid && paramChecker(param, "osversion", [typeChecker("string")]);
    isValid = isValid && paramChecker(param, "params", [isObject]);
    isValid = isValid && paramChecker(param, "currency", [currencyValidator]);
    isValid = isValid && paramChecker(param, "language", [languageValidator]);
    isValid = isValid && paramChecker(param, "device", [deviceValidator]);
    isValid = isValid && paramChecker(param, "testMode", [typeChecker("boolean")]);
    isValid = isValid && paramChecker(param, "nextPage", [typeChecker("boolean")]);
    return isValid;
}