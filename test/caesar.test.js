// Write your tests here!
const caesar = require('../src/caesar');
const expect = require('chai').expect;

describe("caesar", () => {
    it("should return false if shift is undefined, 0, <-25 or >25", () => {
        const expected = false;
        const actual = caesar("hello world");
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const expected = "jgnnq yqtnf";
        const actual = caesar("HELLO WORLD", 2);
        expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the end of the alphabet", () => {
        const expected = "tqxxa iadxp";
        const actual = caesar("hello world", 12);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces and other nonalphabetic symbols in the message", () => {
        const expected = "#fcjjm & umpjb!";
        const actual = caesar("#hello & world!", -2);
        expect(actual).to.equal(expected);
    })
})