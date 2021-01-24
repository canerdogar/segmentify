import { TestScheduler } from "jest";
import { apikeyEvent } from "../../../src/events/apikey/ApikeyEvent";

test("api key event accepts string as param", () => {
    expect(apikeyEvent.validate("dummy")).toBeTruthy();
    expect(apikeyEvent.validate({})).toBeFalsy();
});