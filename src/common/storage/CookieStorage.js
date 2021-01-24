import { configManager } from "../ConfigManager";

/**
 * Cookie storage holder
 */
export class CookieStorage {

    constructor() {
        // Utility
    }

    setWithExpirationDate(name, value, days) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString()
        document.cookie = name + '=' + encodeURIComponent(value) 
                            + '; expires=' + expires + '; domain=' + configManager.getDomain();
    }

    setToStorage(key, item) {
        this.setWithExpirationDate(key, item, 365000);
    }

    getFromStorage(key) {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=')
            return parts[0] === key ? decodeURIComponent(parts[1]) : r
          }, null);
    }

    removeFromStorage(key) {
        this.setWithExpirationDate(key, "", -1);
    }

}