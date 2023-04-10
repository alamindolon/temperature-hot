console.log('first')
console.log('first')
let seconds = 0;
const intervalID = setInterval(() =>
{
    console.log(++seconds);
    if( seconds === 10)
    {
        clearInterval(intervalID);
    }
},500)
console.log('first')
console.log('first')