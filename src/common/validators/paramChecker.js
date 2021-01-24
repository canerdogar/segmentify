/**
 * For a given object, it checks whether paramName exists. If validators provided
 * also validates the found parameter.
 * @param {object} obj 
 * @param {string} paramName 
 * @param {array of validators} validators 
 * @param {boolean} optional // default to true
 */
export function paramChecker(obj, paramName, validators, optional = true) {
    const paramExists = paramName in obj;
    let isValid = true;
    validators?.forEach(validator => isValid = isValid && validator(obj[paramName]));
    if (optional) {
        return !paramExists || isValid;
    } else {
        return paramExists && isValid;
    }
}