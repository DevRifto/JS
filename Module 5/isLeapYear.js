// if you want to find leap years, you can do by reminding with 4 :
function ifLeapYear(year) {
    const leapYear = year % 4;
    if (leapYear === 0){
        console.log(year,'This year is leap year');
        
    }
    else{
        console.log(year,'This year is not leap year');
    }
}
ifLeapYear(2023);
