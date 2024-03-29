import { configManager } from "../ConfigManager";

/**
 * Sends get request to get the userId and sessionId
 */
function sendUserSessionKeyRequest() {
    return makeRequest("GET", configManager.getSegmentifyApiUrl() + "get/key/v1.json?count=2");
}

/**
 * Sends the given event to segmentify backend. If apikey not set then rejects.
 * 
 * @param {object} event 
 */
function sendEventRequest(event) {
    if (configManager.getApikey() === null) {
        console.error("no segmentify apikey is set");
        return Promise.reject();
    } else {
        const body = {
            ...event,
            ...configManager.getUserSessionKey(),
        };
        return makeRequest("POST", configManager.getSegmentifyApiUrl() + `add/events/v1.json?apiKey=${configManager.getApikey()}`, [body]);
    }
}

/**
 * XMLHTTPRequest wrapper. set to send and receive json format.
 * 
 * @param {HTTP methods} method 
 * @param {string} url 
 * @param {object} body 
 */
function makeRequest (method, url, body) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        const errorfunction = function() {
            console.error("error occurred on sending request to segmentify");
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        }
        xhr.onreadystatechange = function() { 
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(JSON.parse(xhr.response));
                    console.info("request successfully send to segmentify");
                } else {
                    errorfunction();
                }
            }
        }   
        xhr.onerror = errorfunction;
        body ? xhr.send(JSON.stringify(body)) : xhr.send();
    });
}

export { sendEventRequest, sendUserSessionKeyRequest }