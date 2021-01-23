import { isNullOrUndefined } from "../../../src/common/util/isNullOrUndefined";

test("isNullOrUndefined test", () => {
    expect(isNullOrUndefined(null)).toBeTruthy();
    expect(isNullOrUndefined(undefined)).toBeTruthy();
    expect(isNullOrUndefined(123)).toBeFalsy();
})