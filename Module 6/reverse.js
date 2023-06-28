// function stringReversed(string){
//     let revers = '';
//     for(let i = string.length - 1; i >= 0; i--) {
//         let element =  string[i];
//         revers = element + revers;
//         console.log(element , revers );
//     }
//     return revers;
// }

// const values = 'abcd';
// const send   = stringReversed(values);

//-----------------------------------------------

function reversWords(str){
    const word = str.split(' ');
    const output = [];
    for(let i = word.length - 1; i >= 0; i--){
        let element = word[i];
        output.push(element);
    }
    console.log(output.join(' '));
}
const string = 'I am a string';
reversWords(string);


