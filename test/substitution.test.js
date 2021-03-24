const expect = require("chai").expect;
const substitutionModule = require("../src/substitution.js");

// Write your tests here!
describe("substitutionModule", () => {
    it ("should return false if given alphabet is not 26 charecters long", () => {
        const input = "abc"
        const alphabet = "plmoknijbuhvygctfxrdzesw"
        const encode = true
        const actual = substitutionModule(input, alphabet, encode)
        const expected  = false
        
        expect(actual).to.equal(expected)
    })
    it ("should return false if given alphabet contains duplicate values", () => {
        const input = "abc"
        const alphabet = "plmoknijbuhvygctfxrdzeswqq"
        const encode = true
        const actual = substitutionModule(input, alphabet, encode)
        const expected  = false
        
        expect(actual).to.equal(expected)
    })
    it ("should correctly translate a given phrase", () => {
        const input = "abc"
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const encode = true
        const actual = substitutionModule(input, alphabet, encode)
        const expected  = "plm"
        
        expect(actual).to.equal(expected)
    })
    it ("should maintain spaces in message after encoding", () => {
        const input= "A, B, C"
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const encode = true
        const actual = substitutionModule(input, alphabet, encode)
        const expected = "p, l, m"
        
        expect(actual).to.equal(expected)
    })
    it ("should maintain spaces in message after decoding", () => {
        const input= "p, l, m"
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const encode = false
        const actual = substitutionModule(input, alphabet, encode)
        const expected = "a, b, c"
        
        expect(actual).to.equal(expected)
    })
    it ("should ignore capital letters", () => {
        const input= "ABC"
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const encode = true
        const actual = substitutionModule(input, alphabet, encode)
        const expected = "plm"
        
        expect(actual).to.equal(expected)
    })
    
        
})