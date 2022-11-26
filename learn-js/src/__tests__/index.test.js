const sum = require('../index.js');

xdescribe('test sum', () => {
    it( '1+2' , () => { 
        expect(sum(1, 2)).toBe(3);
    }),
    it( '1+6' , () => { 
        expect(sum(1, 6)).toBe(7);
    }) 
})