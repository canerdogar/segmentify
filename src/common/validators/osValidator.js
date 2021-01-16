export function osValidator(os) {
    return [
        'Windows', 'Linux', 'MacOS', 'Android', 'iOS', 'Other'
    ].includes(os);
}