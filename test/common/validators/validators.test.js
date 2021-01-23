import { browserValidator } from "../../../src/common/validators/browserValidator";
import { currencyValidator } from "../../../src/common/validators/currencyValidator";
import { deviceValidator } from "../../../src/common/validators/deviceValidator";
import { languageValidator } from "../../../src/common/validators/languageValidator";
import { osValidator } from "../../../src/common/validators/osValidator";
import { urlValidator } from "../../../src/common/validators/urlValidator";

describe("browser validator", () => {
    test("valid browser", () => {
        expect(browserValidator("Chrome")).toBeTruthy();
    });

    test("invalid browser", () => {
        expect(browserValidator("Samsung Browser")).toBeFalsy();
    });
});

describe("currency validator", () => {
    test("valid currency", () => {
        expect(currencyValidator("GHS")).toBeTruthy();
    });

    test("invalid currency", () => {
        expect(currencyValidator("Dinar")).toBeFalsy();
    });
});

describe("device validator", () => {
    test("valid device", () => {
        expect(deviceValidator("PC")).toBeTruthy();
    });

    test("invalid device", () => {
        expect(deviceValidator("PS5")).toBeFalsy();
    });
});

describe("language validator", () => {
    test("valid language", () => {
        expect(languageValidator("TR")).toBeTruthy();
    });

    test("invalid language", () => {
        expect(languageValidator("Swedish")).toBeFalsy();
    });
});

describe("os validator", () => {
    test("valid os", () => {
        expect(osValidator("Linux")).toBeTruthy();
    });

    test("invalid os", () => {
        expect(osValidator("Pardus")).toBeFalsy();
    });
});

describe("url validator", () => {
    test("valid url", () => {
        expect(urlValidator("http://demo.segmentify.com")).toBeTruthy();
    });

    test("invalid url", () => {
        expect(urlValidator("123.-")).toBeFalsy();
    });
});
