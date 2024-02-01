// const readline  = require('readline');
// const a = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// a.question('Enter a Value:',(userInput)=>{
// console.log('Your Value:',(userInput));
// a.close();
// });


function cd(n,t){
    console.log(n,'*',t,'=',n*t);
    t=t+1;
    if(t<=10){
        setTimeout(function() {cd(n,t);},1000);
    }
    else{
        clearTimeout();
    }
}
const prompt =  require('prompt-sync')();
const num = prompt('Enter the number: ');
cd(num,1);