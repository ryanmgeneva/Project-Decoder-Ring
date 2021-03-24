const expect = require("chai").expect;
const polybiusModule = require("../src/polybius.js");

// Write your tests here!
describe("polybiusModule", () => {
    it ("should return 42 for i and j when encoding", () => {
        const input = "i, j"
        const encode = true
        const actual = polybiusModule(input, encode)
        const expected = "42, 42"

        expect(actual).to.equal(expected)
    })
    it ("should return 'i/j' for 24 when decoding", () => {
        const input = "42"
        const encode = false
        const actual = polybiusModule(input, encode)
        const expected = "i/j"

        expect(actual).to.equal(expected)
    })
    it ("should ignore capital letters", () => {
        const input= "ABC, XYZ?"
        const encode = true
        const actual = polybiusModule(input, encode)
        const expected = "112131, 354555?"
        
        expect(actual).to.equal(expected)
    })
    it ("should maintain spaces in message after encoding", () => {
        const input= "A, B, C"
        const encode = true
        const actual = polybiusModule(input, encode)
        const expected = "11, 21, 31"
        
        expect(actual).to.equal(expected)
    })
    it ("should maintain spaces in message after decoding", () => {
        const input= "11, 21, 31"
        const encode = false
        const actual = polybiusModule(input, encode)
        const expected = "a, b, c"
        
        expect(actual).to.equal(expected)
    })
    
 
})