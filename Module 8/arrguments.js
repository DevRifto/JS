function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments); // [Arguments] { '0': 10, '1': 10, '2': 11, '3': 12 }
                            // They Will show you the index as in object from .

};

add(10,10,11,12);