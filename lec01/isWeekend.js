function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();
    var a = ["weekend","weekday","weekday","weekday","weekday","weekday","weekday"];
    return a[day];
}

console.log(isWeekend());