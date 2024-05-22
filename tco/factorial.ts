const trampoline = (fn) => {
  while (typeof fn === 'function') {
    fn = fn()
  }

  return fn
}

const factorialHelper = (x, accumulator) => {
  if (x <= 1) {
    return accumulator
  }

  return () => factorialHelper(x - BigInt(1), x * accumulator)
}

const factorial = (n) => {
  // Converting values to BigInt
  //-------------------------------\/----------\/
  return trampoline(factorialHelper(BigInt(n), BigInt(1)));
}

console.log(factorial(BigInt(400)))
