export function browserValidator(browser) {
    const isValid =  [
        'Chrome', 'Firefox', 'Internet Explorer', 'Microsoft Edge', 'Safari', 
        'Android','Opera', 'Maxthon', 'iPhone', 'iPad'
    ].includes(browser);
    !isValid && console.error("Please provide the browser parameter correctly.");
    return isValid;
}