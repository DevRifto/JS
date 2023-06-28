// convert any hours to minutes :
function hoursToMinutes(hours){
  let minutes = hours * 60;
  return minutes;
}
let time = 2;
let minutes = hoursToMinutes(time);
console.log(time,'hourse is ',minutes, ' minutes');
