jest.mock("../../../src/common/ConfigManager");
import { configManager } from "../../../src/common/ConfigManager";
import { sendEventRequest, sendUserSessionKeyRequest } from "../../../src/common/communicator/Communicator";

beforeAll(() => {

    const xhrMockClass = () => ({
        readyState: XMLHttpRequest.DONE,
        status: 200,
        response: "{}",
        open            : jest.fn(),
        send            : function() {
            this.onreadystatechange();
        },
        setRequestHeader: jest.fn(),
    });
      
    window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);

});

test("sendEventRequest without apikey", async () => {
    configManager.getApikey.mockImplementation(() => null);
    await expect(sendEventRequest()).rejects.toBeUndefined();
});

test("sendEventRequest with apikey", async () => {
    configManager.getApikey.mockImplementation(() => "dummy-apikey");
    configManager.getUserSessionKey.mockImplementation(() => {
        return {
            userId: "userId",
            sessionId: "sessionId"
        };
    });
    await expect(sendEventRequest()).resolves.toEqual({});
});