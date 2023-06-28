const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// using for (of) loop :
//for (of) cant usable in object : (it will not loop and show you error)
// for(const number of numbers){console.log(number);};

//looping by for (in) keys and values :
const stundent = {
    name    : 'Abdullah Al Miraz',
    money   : 0,
    study   : 'web development',
}
for(const key in stundent){
    const value = stundent[key];
    console.log(key,value);
};
