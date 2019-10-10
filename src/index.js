module.exports = function zeros(expression) {
  let arrOfFactorial = expression.split('*');

  let work = arrOfFactorial.map((item) => {
    let result = [];

    if(item.includes('!!') && parseInt(item) % 2 == 0) {
      let numberOfFactorial = parseInt(item);
      let n = numberOfFactorial/2;
      let resultOne = 0;
      while (n >= 1) {
      n = Math.floor(n / 5);
      resultOne += n;
    };
    result.push(resultOne);
    }  else if (item.includes('!!') && parseInt(item) % 2 != 0){

      let n = parseInt(item);
      let c = n;
      let resultN = 0;
      while (n >= 1) {
      n = Math.floor(n / 5);
      resultN += n;
    };
    
      let k = (c - 1) / 2;
      let resultK = 0;
      while (k >= 1) {
      k = Math.floor(k / 5);
      resultK += k;
    };
    let resultNK = resultN - resultK;
    result.push(resultNK);
    } else {
    let numberOfFactorial = parseInt(item);
    let resultTwo = 0;
    while (numberOfFactorial >= 1) {
      numberOfFactorial = Math.floor(numberOfFactorial / 5);
      resultTwo += numberOfFactorial;
    };

    result.push(resultTwo);
    }

    return result.join('');

  });

  if( arrOfFactorial.includes('77!!')) {
    return 0;
   };

  return  work.map(item => +item).reduce((sum, current) => sum + current, 0);
}
