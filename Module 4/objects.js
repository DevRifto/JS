// if you want to store many varyable type in one var you can use object :
// here name is key and rifato is value
var boy = {
  Name: "Rifato",
  Class: 11,
  Roll: 20,
  Collage: "Mc Technical and Bm Collage",
};
// console.log(boy);

// you can show the valu by saying the key :
// console.log(boy.Name);

// you can change the value:
// boy.Collage ='Bm Collage';
// console.log(boy);

// to show only the key output :
// console.log(Object.keys(boy));

// to show only the valus output :
// console.log(Object.values(boy));

// show spacific valu:
console.log(boy["Roll"]);
