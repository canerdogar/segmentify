export function osValidator(os) {
    const isValid = [
        'Windows', 'Linux', 'MacOS', 'Android', 'iOS', 'Other'
    ].includes(os);
    !isValid && console.error("Please provide the os parameter correctly.");
    return isValid;
}