Array.prototype.even = function(){
   setTimeout(()=>{console.log(this.filter(num => num%2==0))},0)
    //return this.filter(num => num %2 == 0)
}
Array.prototype.odd = function(){
   setTimeout(() => {console.log(this.filter(num => num %2 != 0))},0) 
    //return this.filter(num => num%2 != 0)
}

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');

