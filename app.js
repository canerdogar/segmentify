import { eventStore } from "./src/common/EventStore";
import { apikeyEvent } from "./src/apikey/ApikeyEvent";
import { productViewEvent } from "./src/productView/ProductViewEvent";
import { pageViewEvent } from "./src/pageView/PageViewEvent";
import { configManager } from "./src/common/ConfigManager";
import { isNullOrUndefined } from "./src/common/util/isNullOrUndefined";

eventStore.register(apikeyEvent);
eventStore.register(productViewEvent);
eventStore.register(pageViewEvent);

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

