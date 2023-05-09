//node timer1.js 10 3 5 15 9 
//array=[10, 3, 5, 15, 9];
//process.stdout.write('.\n');
//console.log(process.argv);

let array = process.argv.slice(2);
const validArray = array.filter(element => {
  const value = Number(element);
  return !isNaN(value) && value >= 0;
});
//console.log(validArray);
if (validArray.length > 0); {
  for (let i = 0; i < validArray.length; i++) {
    timer = array[i];
    setTimeout(() => {
      process.stdout.write('.\n');

    }, (timer * 1000));
  }
}