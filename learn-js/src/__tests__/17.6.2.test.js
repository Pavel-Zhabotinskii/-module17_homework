const getPercents = require('../17.6.2.js')

describe('test for getPercents function', () => {
    it( 'we get 30 percent of 200' , () => { 
        expect(getPercents(30 , 200)).toBe(60);
    }),
    it( 'we get 40 percent of 200' , () => { 
        expect(getPercents(40 , 200)).toBe(60);
    }),
    it( 'we get 30 percent of 0' , () => { 
        expect(getPercents(30 , 0)).toBe(30);
    })
})