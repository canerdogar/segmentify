import { eventStore } from "./src/common/EventStore";
import { apikeyEvent } from "./src/apikey/ApikeyEvent";
import { productViewEvent } from "./src/productView/ProductViewEvent";
import { pageViewEvent } from "./src/pageView/PageViewEvent";

eventStore.register(apikeyEvent);
eventStore.register(productViewEvent);
eventStore.register(pageViewEvent);


const namespace = window["SegmentifyTrackingObject"];
const eventWithParams = window[namespace].q.shift();
const event = eventStore.getEvent(eventWithParams[0]);
event.validate(eventWithParams[1]);