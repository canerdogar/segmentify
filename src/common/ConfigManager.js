import { storage } from "./storage/Storage";
import { isNullOrUndefined } from "./util/isNullOrUndefined";
import { sendUserSessionKeyRequest } from "./communicator/Communicator";

class ConfigManager {

    constructor() {
        this.apikey = null;
        this.userSessionCookieKey = "sgfUS"
    }

    getNamespace() {
        return window["SegmentifyTrackingObject"];
    }

    getStorageType() {
        return window[this.getNamespace()]?.config?.storage;
    }

    getDomain() {
        return window[this.getNamespace()]?.config?.domain;
    }

    getSegmentifyApiUrl() {
        return window[this.getNamespace()]?.config?.segmentifyApiUrl;
    }

    setApikey(apikey) {
        this.apikey = apikey;
    }

    getApikey() {
        return this.apikey;
    }

    setUserSessionKey() {
        return new Promise((resolve, reject) => {
            const userSessionKey = storage.getFromStorage(this.userSessionCookieKey);
            !isNullOrUndefined(userSessionKey) 
                ? resolve() 
                : sendUserSessionKeyRequest()
                    .then((response) => storage.setToStorage(this.userSessionCookieKey, `${response[0]},${response[1]}`))
                    .catch(() => reject());
        });
    }

    getUserSessionKey() {
        const userSessionKey = storage.getFromStorage(this.userSessionCookieKey);
        const userSessionKeyArray = userSessionKey.split(",");
        return {
            userId: userSessionKeyArray[0],
            sessionId: userSessionKeyArray[1]
        };
    }

}

export const configManager = new ConfigManager();