const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let arrSymbMorse = Object.keys(MORSE_TABLE);

function decode(expr) {
    let arrStr = expr.match(/.{1,10}/g);
    let arrRes = [];
    for(elem in arrStr) {
        let index = 0;
        while(arrStr[elem][index] === '0') {
            arrStr[elem] = arrStr[elem].replace(/^0+/, "");    
            index +=1;
        } 
        arrRes.push(arrStr[elem].match(/.{1,2}/g));     
    };
    for (elem in arrRes) {
        for (i = 0; i < arrRes[elem].length; i ++) {
            if(arrRes[elem][i] === '10') arrRes[elem][i] = '.'
            else if (arrRes[elem][i] === '11') arrRes[elem][i] = '-'
                 else  if (arrRes[elem][i] === '**') arrRes[elem] = [' '];
        };    
    };
    for (key in arrRes) {
        arrRes[key] = arrRes[key].join('');
        for (i = 0; i < arrSymbMorse.length; i ++) {
            if (arrRes[key] === arrSymbMorse[i]) arrRes[key] = MORSE_TABLE[arrSymbMorse[i]];
        };
    };
    return arrRes.join('');
}

module.exports = {
    decode
}