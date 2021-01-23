import { eventStore } from "../../src/common/EventStore";
import { pageViewEvent } from "../../src/pageView/PageViewEvent";
import { apikeyEvent } from "../../src/apikey/ApikeyEvent";

test("event store test", () => {

    eventStore.register(pageViewEvent);
    eventStore.register(apikeyEvent);

    expect(eventStore.getEvent("view:page")).not.toBeUndefined();
    expect(eventStore.getEvent("apikey")).not.toBeUndefined();
    expect(eventStore.getEvent("view:product")).toBeUndefined();

});