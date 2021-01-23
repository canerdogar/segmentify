import { LocalStorage } from "../../../src/common/storage/LocalStorage";

beforeAll(() => {

    const localStorageMock = () => ({
        storage: new Map(),
        getFromStorage: function(key) {
            return this.storage.get(key);
        },
        setToStorage: function(key, item) {
            this.storage.set(key, item);
        },
        removeFromStorage: function(key) {
            this.storage.delete(key)
        },
    });
      
    window.localStorage = jest.fn().mockImplementation(localStorageMock);

})

test("local storage test", () => {
    const localStorage = new LocalStorage();
    localStorage.setToStorage("sgf", "userId,sessionId");
    expect(localStorage.getFromStorage("sgf")).toBe("userId,sessionId");
    localStorage.removeFromStorage("sgf");
    expect(localStorage.getFromStorage("sgf")).toBeNull();
})