export function languageValidator(param) {
    const isValid =  [
        "TR", "EN", "FR", "DE"
    ].includes(param);
    !isValid && console.error("Please provide the language parameter correctly.");
    return isValid;
}