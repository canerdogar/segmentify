import { CookieStorage } from "./CookieStorage";
import { LocalStorage } from "./LocalStorage";
import { configManager } from "../ConfigManager";

/**
 * Storage factory
 */
class Storage {

    getStorage() {
        return configManager.getStorageType() === "COOKIE" ? new CookieStorage() : new LocalStorage();
    }
    
    setToStorage(key, item) {
        this.getStorage().setToStorage(key, item);
    }

    getFromStorage(key) {
        return this.getStorage().getFromStorage(key);
    }

    removeFromStorage(key) {
        this.getStorage().removeItem(key);
    }

}

export const storage = new Storage();