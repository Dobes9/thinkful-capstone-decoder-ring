// Write your tests here!
const substitution = require('../src/substitution');
const expect = require('chai').expect;


describe("substitution", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
        const expected = false;
        const actual = substitution("hello world", "hioksvocanme");
        expect(actual).to.equal(expected);
    })
    it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
        const expected = "ykrrpik";
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    })
    it("should return false if there are any duplicate characters in the given alphabet", () => {
        const expected = false;
        const actual = substitution("hello world", "plmoknijbuhvygctfxrdzeswaa");
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces in the message, before and after encoding or decoding", () => {
        const expected = "hello world";
        const actual = substitution("jkvvc scxvo", "plmoknijbuhvygctfxrdzeswaq", false);
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", () => {
        const expected = "jkvvc scxvo";
        const actual = substitution("HELLO WORLD", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    })
});
