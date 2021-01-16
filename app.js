import { eventStore } from "./src/common/EventStore";
import { apikeyEvent } from "./src/apikey/ApikeyEvent";
import { productViewEvent } from "./src/productView/ProductViewEvent";

eventStore.register(apikeyEvent);
eventStore.register(productViewEvent);


const namespace = window["SegmentifyTrackingObject"];
const eventWithParams = window[namespace].q.shift();
const event = eventStore.getEvent(eventWithParams[0]);
event.validate(eventWithParams[1]);