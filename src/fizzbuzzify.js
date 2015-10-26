export default function fizzbuzzify (value) {
  const type = typeof(value);
  const isNumber = type === "number" || ((type === "object") &&
    Object.prototype.toString.call(value) === "[object Number]" );

  if ( ! isNumber) {
    throw new Error(`Cannot fizzbuzzify ${value} of type ${type}`);
  }

  return (value % 15 === 0)? "FizzBuzz" :
         (value % 3 === 0)? "Fizz" :
         (value % 5 === 0)? "Buzz" :
         value.toString();
}
