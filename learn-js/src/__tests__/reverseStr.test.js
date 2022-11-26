const reversString = require('../reverseStr.js')

describe('test for reversString function', () => {
    it( 'reverse the string hello' , () => { 
        expect(reversString('hello')).toBe('olleh');
    })
})