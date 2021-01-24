export function deviceValidator(device) {
    return [
        'PC', 'TABLET', 'MOBILE', 'ANDROID', 'IOS'
    ].includes(device);
}