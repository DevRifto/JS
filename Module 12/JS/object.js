// OBJECTS :
const stundent = {
    name    : 'Abdullah Al Miraz',
    money   : 0,
    study   : 'web development',
    currentMoney : function(){
        console.log(`Your Current Money Is : ${this.money} Taka`);
    }
};
// stundent.currentMoney();

// only want to show the key :
const key   = Object.keys(stundent);
const value = Object.values(stundent);
// console.log(key,value);

// showing enumarabol : all thing in a array :
const pair = Object.entries(stundent);
// console.log(pair);
// seal and object : (cant deleteable): but editable and updatable :
Object.seal(stundent);
// console.log(stundent);

// freeze : (cant deleteable): cant editable and updatable :
Object.seal(stundent);
console.log(stundent);

// delete an object key and value :
delete stundent.currentMoney;
// console.log(stundent);
