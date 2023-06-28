// If you want to replace :
for(let i = 0; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('Horray')
    }else if(i % 3 === 0){
        console.log('foo');
    }
    else if(i % 5 === 0){
        console.log('bar')
    }
    else{
        console.log(i)
    }
}