//if you want to skip the valu and go on use continue :

var result = [10, 5, 22, 33, 55, 64, 87, 54, 50, 40, 20, 36];
for(var i = 0; i < result.length; i++){
    var pass = result[i];
    if(pass < 33){
        continue;
    }
    console.log(pass);
}
