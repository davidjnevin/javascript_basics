const limit = 10;

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        let numberLabel = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log( i, numberLabel); 
    }
}

showNumbers(limit)