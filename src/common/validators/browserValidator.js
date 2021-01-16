export function browserValidator(browser) {
    return [
        'Chrome', 'Firefox', 'Internet Explorer', 'Microsoft Edge', 'Safari', 
        'Android','Opera', 'Maxthon', 'iPhone', 'iPad'
    ].includes(browser);
}