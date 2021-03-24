const expect = require("chai").expect;
const caesarModule = require("../src/caesar.js");

// Write your tests here!
describe("caesarModule", () => {
    it ("should return false if shift is less than -25", () => {
        const input = "ABC, XYZ?"
        const shift = (-30)
        const actual = caesarModule(input, shift)
        const expected = false;
        
        expect(actual).to.equal(expected)
    })
    it ("should return false if shift is 0", () => {
        const input = "ABC, XYZ?"
        const shift = (0)
        const actual = caesarModule(input, shift)
        const expected = false;
        
        expect(actual).to.equal(expected)
    })
    it ("should return false if shift is greater than 25", () => {
        const input = "ABC, XYZ?"
        const shift = (30)
        const actual = caesarModule(input, shift)
        const expected = false;
        
        expect(actual).to.equal(expected)
    })
    it ("should return false if shift is not present", () => {
        const input = "ABC, XYZ?"
        const actual = caesarModule(input)
        const expected = false;
        
        expect(actual).to.equal(expected)
    })
    it ("should ignore capital letters", () => {
        const input= "ABC, XYZ?"
        const shift = 1
        const actual = caesarModule(input, shift)
        const expected = "bcd, yza?"
        
        expect(actual).to.equal(expected)
    })
    it ("should loop back around at end of alphabet", () => {
        const input = "XYZ?"
        const shift = 3
        const actual = caesarModule(input, shift)
        const expected = "abc?"
        
        expect(actual).to.equal(expected)
    })
    it ("should maintain spaces and non-alphabet letters", () => {
        const input = "1, abc?"
        const shift = 1
        const actual = caesarModule(input, shift)
        const expected = "1, bcd?"

        expect(actual).to.equal(expected)
    })
        
})