function sumaTest (a,b){
    return a + b;
};

//Homework
const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];
function getRowNumber (letter){
    return letter.charCodeAt(0)-65;
};

function checkMaxRows (row){
    let maxRows = layout.length;
    if (getRowNumber(row) > maxRows) throw new TypeError("Please enter a Seat Letter between A and E");
};

function getSeat (letter, number) {
    const numberRow = getRowNumber(letter);
    const layoutRows = layout[numberRow];
    const seat = layoutRows[number];
    return seat;
};
function checkSeatStatus (row, number){
    if(typeof row !== 'string' || row == '') throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number') throw new TypeError('First parameter is not a number');

    const seat = getSeat(row, number);
    return seat.booked;
};

function book (row, number){
    if(typeof row !== 'string' || row == '') throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number') throw new TypeError('First parameter is not a number');

    const seat = getSeat(row, number);
    if (seat.booked === true) {
        return ('Seat in ${row}${number} is already booked')
    } else {
        seat.booked = true;
        return ('Seat in ${row}${number} succesfully booked')
    }
};



module.exports = {
    sumaTest,
    checkSeatStatus,
    getRowNumber,
    book,
    getSeat,
    checkMaxRows
}
