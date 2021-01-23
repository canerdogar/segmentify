import { sendEventRequest } from "../../src/common/communicator/Communicator";
import { pageViewEvent } from "../../src/pageView/PageViewEvent";

jest.mock("../../src/common/communicator/Communicator");

test("page view mandatory fields", async () => {

    sendEventRequest.mockImplementation(() => {
        console.log("anan baban");
    });

    expect(pageViewEvent.validate({
        category: "dummy",
        subCategory: "dummy"
    })).toBeTruthy();

    expect(pageViewEvent.validate({
        category: "dummy"
    })).toBeTruthy();

    expect(pageViewEvent.validate({
        subCategory: "dummy"
    })).toBeFalsy();

    pageViewEvent.apply({
        category: "dummy"
    });

});