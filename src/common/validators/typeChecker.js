export function typeChecker(type) {
    return function(param) {
        return (typeof param === type);
    }
}