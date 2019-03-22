const Namespace = require("./namespace.js");

describe("test namespace library", () => {

    beforeEach(() => {
        window.app = undefined;
    });

    it("should define Namespace", () => {
        expect(window.Namespace).toBeDefined();
    })

    it("should contain default separator as .", () => {
        expect(window.Namespace.separator).toBe(".");
    })

    it("should create proper namespace", () => {
        window.Namespace("app.test");
        expect(window.app).toBeDefined();
        expect(window.app).toEqual({
            test: {}
        });

        expect(window.app.test).toEqual({});

        window.Namespace("app.test.demo");
        expect(window.app.test.demo).toEqual({});
    })

    it("should create proper namspace if seperator is changed", () => {
        window.Namespace.separator = ",";

        window.Namespace("app,test");
        expect(window.app).toBeDefined();

        expect(window.app.test).toEqual({});
    })
});