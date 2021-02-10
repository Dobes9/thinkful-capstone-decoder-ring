// Write your tests here!
const polybius = require('../src/polybius');
const expect = require('chai').expect;


describe("polybius", () => {
    it("when encoding, should translate the letters i and j to 42", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.eql(expected);
    })
    it("when decoding, should translate 42 to (i/j)", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(actual).to.eql(expected);
    })
    it("should ignore capital letters", () => {
        const expected = polybius("hello world");
        const actual = polybius("Hello World");
        expect(actual).to.eql(expected);
    })
    it("should maintain spaces in the message, before and after encoding or decoding", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.eql(expected);
    })
});
