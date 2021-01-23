import { eventStore } from "./src/common/EventStore";
import { apikeyEvent } from "./src/apikey/ApikeyEvent";
import { productViewEvent } from "./src/productView/ProductViewEvent";
import { pageViewEvent } from "./src/pageView/PageViewEvent";
import { configManager } from "./src/common/ConfigManager";
import { isNullOrUndefined } from "./src/common/util/isNullOrUndefined";

eventStore.register(apikeyEvent);
eventStore.register(productViewEvent);
eventStore.register(pageViewEvent);

var segNamespace = "Segmentify";

window['SegmentifyTrackingObject'] = segNamespace;

window[segNamespace] = window[segNamespace] || function () {
  (window[segNamespace].q = window[segNamespace].q || []).push(arguments);
};

window[segNamespace].config = {
  segmentifyApiUrl: '//gandalf.segmentify.com/',
  domain: '.robertopirlanta.com'
};

/* Initialize Segmentify with your Api Key */
Segmentify('apikey', '2e586a90-e430-41c9-8bc0-27c9d522b540');

Segmentify("view:page", {
    "name":"PAGE_VIEW",
    "userId":"182786394628874241",
    "sessionId":"182786394628874240",
    "testMode": false,
    "device":"PC",
    "noProcess":false,
    "tryCount":0,
    "nextPage":false,
    "params":{},
    "recommendIds":[],
    "pageUrl":"https://www.robertopirlanta.com/",
    "browser":"Chrome",
    "os":"MacOS",
    "osversion":"10.15.7",
    "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
    "lang":"EN",
    "region":"",
    "async":"true",
    "email":"",
    "ft":"2021.01.23 12:39:59.600",
    "tz":"-180",
    "category":"Home Page"})


function startLoop() {
    const queue = window[configManager.getNamespace()].q;
    while (queue.length !== 0) {
        const element = queue.shift();
        const [eventName, eventParam] = element; 
        const event = eventStore.getEvent(eventName);
        isNullOrUndefined(event) 
            ? console.error(`not supported event: ${eventName}`) 
            : (event.validate(eventParam) && event.apply(eventParam));
    }
}

configManager.setUserSessionKey().then(() => {
    startLoop();
});

