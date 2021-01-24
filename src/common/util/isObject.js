/**
 * Checks parameters is object. 
 * null check is for false positives.
 * @param {unknown} param 
 */
export function isObject(param) {
    return typeof param === 'object' && param !== null;
}