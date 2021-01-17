export class LocalStorage {

    constructor() {
        // Utility
    }

    setToStorage(key, item) {
        window.localStorage.setItem(key, item);
    }

    getFromStorage(key) {
        return window.localStorage.getItem(key);
    }

    removeFromStorage(key) {
        window.localStorage.removeItem(key);
    }

}