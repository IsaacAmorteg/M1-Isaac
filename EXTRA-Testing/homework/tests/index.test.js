const {sumaTest, checkSeatStatus, getRowNumber, book, getSeat, checkMaxRows} = require('../homework');

/*Test Sub 1 of adding 2 numbers.
xit('should return 10 if adding 5 and 5', () => {
    expect(sumaTest(5,5)).toBe(10);
});

xit('should return 100 if adding 99 and 1', () => {
    expect(sumaTest(99,1)).toBe(100);
});
*/
//Homework
describe ('getRowNumber', ()=>{

it('should return row 0 if letter A is passed', ()=>{
    expect(getRowNumber('A')).toBe(0);
});

it('should return row 2 if letter C is passed', ()=>{
    expect(getRowNumber('C')).toBe(2);
});
});
describe ('checkSeatStatus', ()=>{
    it ('checkSeatStatus is a function', ()=>{
        expect(typeof checkSeatStatus).toBe('function');
    });
    
    it('should return a TypeError if first parameter is not a string', ()=>{
        expect(()=> checkSeatStatus(100)).toThrow(new TypeError('First parameter is not a string'));
    });
    
    it('should return a TypeError if first parameter is not a number', ()=>{
        expect(()=> checkSeatStatus('a','2')).toThrow(new TypeError('First parameter is not a number'));
    });
    it ('should return true if seat is booked', ()=>{
        expect(checkSeatStatus('A',1)).toBeTruthy;
    });
    it ('should return false if seat is not booked', ()=>{
        expect(checkSeatStatus('E',3)).toBeFalsey;
    });
});
describe ('book', ()=>{
    it('should return a TypeError if first parameter is not a string', ()=>{
        expect(()=> book(1)).toThrow(new TypeError('First parameter is not a string'));
    });
    it('should return a TypeError if first parameter is an empty string', ()=>{
        expect(()=> book('')).toThrow(new TypeError('First parameter is not a string'));
    });
    
    it('should return a TypeError if first parameter is not a number', ()=>{
        expect(()=> book('x','4')).toThrow(new TypeError('First parameter is not a number'));
    });
    it('should book seat and return successfull message if seat is available', ()=>{
        expect(checkSeatStatus('E',3)).toBeFalsey;
        expect(book('E', 3)).toBe('Seat in ${row}${number} succesfully booked');
        expect(checkSeatStatus('E',3)).toBeTruthy;
    });

    it('should not book seat and return unsuccessfull message if seat is not available', ()=>{
        expect(book('A', 1)).toBe('Seat in ${row}${number} is already booked');
    });
})

describe ('getSeat', ()=>{
    it('should return object if the seat letter is A and number is 2', ()=>{
        expect(typeof getSeat('A',2)).toBe('object');
    })
})
describe('checkMaxRows', ()=>{
    it ('checkMaxRows is a function', ()=>{
        expect(typeof checkMaxRows).toBe('function');
    });
    it('should return error if the Seat Letter is not allowed', ()=>{
        expect(()=>checkMaxRows('Z')).toThrow(new TypeError ("Please enter a Seat Letter between A and E"))
    })
    it('should return undefined if the letter is allowed', ()=>{
        expect(checkMaxRows("A")).toBeUndefined;
    })
})