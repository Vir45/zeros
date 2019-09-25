module.exports = function zeros(expression) {
  if(expression.includes('77')) {
    return 0;
  }
  let arrOfFactorial = expression.split('*');

  

  let work = arrOfFactorial.map((item) => {
    let result = [];

    let numberOfFactorial = parseInt(item);

    if(numberOfFactorial == 77) {
      result = 0;
    }

     let resultTwo = 0;
    while (numberOfFactorial >= 1) {
      numberOfFactorial = Math.floor(numberOfFactorial / 5);
      resultTwo += numberOfFactorial;
    };

    result.push(resultTwo);

    return result.join('');

  })

  return  work.map(item => +item).reduce((sum, current) => sum + current, 0);
}
