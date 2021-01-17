export function deviceValidator(device) {
    const isValid =  [
        'PC', 'TABLET', 'MOBILE', 'ANDROID', 'IOS'
    ].includes(device);
    !isValid && console.error("Please provide the device parameter correctly.");
    return isValid;
}