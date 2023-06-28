// splice is not slice its like deleteing some values and add more :
const value = [20,21,22,23,24,25,26,27,28,29,30]
const splice = value.splice(5,5,1000000) // first one slice value and second one delete how many value
                                        // Third one add value
console.log(splice,'This value Has Been Removed');
console.log(value,'This Is the Current Value');
