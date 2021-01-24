jest.mock("../../../../src/common/communicator/Communicator");
import { sendEventRequest } from "../../../../src/common/communicator/Communicator";
import { pageViewEvent } from "../../../../src/events/viewEvents/pageView/PageViewEvent";
jest.useFakeTimers();


test("page view mandatory fields", () => {

    sendEventRequest.mockResolvedValue({})

    expect(pageViewEvent.validate({
        category: "dummy",
        subCategory: "dummy"
    })).toBeTruthy();

    expect(pageViewEvent.validate({
        category: "dummy",
        pageUrl: "http://demo.segmentify.com",
        referrer: "http://demo.segmentify.com"
    })).toBeTruthy();

    expect(pageViewEvent.validate({
        subCategory: "dummy"
    })).toBeFalsy();

    pageViewEvent.apply({
        category: "dummy"
    });

    expect(sendEventRequest.mock.calls.length).toBe(1);
});